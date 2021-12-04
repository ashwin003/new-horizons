import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SavedEntityService } from '@app/@shared/services/saved-entity.service';
import { TranslationService } from '@app/@shared/services/translation.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-art-modal',
  templateUrl: './art-modal.component.html',
  styleUrls: ['./art-modal.component.scss'],
})
export class ArtModalComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private savedEntityService: SavedEntityService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ArtModalComponent>
  ) {}

  icon$ = this.savedEntityService.isSaved(this.data.fileName).pipe<string>(map((e) => (e ? 'star' : 'star_border')));

  ngOnInit(): void {}

  toggleSaveState() {
    this.savedEntityService.isSaved(this.data.fileName).subscribe((d) => {
      if (d) {
        this.savedEntityService.remove(this.data.fileName);
      } else {
        this.savedEntityService.save(this.data.fileName, 'Art');
      }
      this.dialogRef.close();
    });
  }

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }
}
