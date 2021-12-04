import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SavedEntityService } from '@app/@shared/services/saved-entity.service';
import { TranslationService } from '@app/@shared/services/translation.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-fossil-modal',
  templateUrl: './fossil-modal.component.html',
  styleUrls: ['./fossil-modal.component.scss'],
})
export class FossilModalComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private savedEntityService: SavedEntityService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<FossilModalComponent>
  ) {}

  icon$ = this.savedEntityService.isSaved(this.data.fileName).pipe<string>(map((e) => (e ? 'star' : 'star_border')));

  ngOnInit(): void {}

  toggleSaveState() {
    this.savedEntityService.isSaved(this.data.fileName).subscribe((d) => {
      if (d) {
        this.savedEntityService.remove(this.data.fileName);
      } else {
        this.savedEntityService.save(this.data.fileName, 'Fossil');
      }
      this.dialogRef.close();
    });
  }

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }
}
