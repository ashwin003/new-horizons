import { Component, OnInit } from '@angular/core';
import { ArtService } from '../services/art.service';
import { TranslationService } from '@shared/services/translation.service';
import { MatDialog } from '@angular/material/dialog';
import { ArtModalComponent } from '../art-modal/art-modal.component';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
})
export class ArtComponent implements OnInit {
  artWorks: any[] = [];
  constructor(
    private artService: ArtService,
    private translationService: TranslationService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.artService.getAll().subscribe((response) => {
      this.artWorks = response;
    });
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
