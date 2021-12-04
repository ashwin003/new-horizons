import { Component, OnInit } from '@angular/core';
import { ArtService } from '../services/art.service';
import { TranslationService } from '@shared/services/translation.service';
import { MatDialog } from '@angular/material/dialog';
import { ArtModalComponent } from '../art-modal/art-modal.component';
import { SavedEntityService } from '@app/@shared/services/saved-entity.service';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
})
export class ArtComponent implements OnInit {
  artWorks: any[] = [];
  submittedArtworks: string[] = [];
  highlightPending = false;
  constructor(
    private artService: ArtService,
    private translationService: TranslationService,
    private savedEntityService: SavedEntityService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.artService.getAll().subscribe((response) => {
      this.artWorks = response;
    });
    this.savedEntityService
      .getAll('Art')
      .subscribe((response) => (this.submittedArtworks = response.map((r) => r.fileName)));
  }

  isPending(fileName: string): boolean {
    return this.highlightPending && !this.submittedArtworks.includes(fileName);
  }

  checkboxChanged(event: MatCheckboxChange) {
    this.highlightPending = event.checked;
  }

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }

  openModal(artwork: any) {
    this.matDialog.open(ArtModalComponent, {
      data: artwork,
    });
  }
}
