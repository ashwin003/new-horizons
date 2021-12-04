import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SavedEntityService } from '@app/@shared/services/saved-entity.service';
import { HemisphereSelectorService } from '@app/shell/services/hemisphere-selector.service';
import { TranslationService } from '@shared/services/translation.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-critter-modal',
  templateUrl: './critter-modal.component.html',
  styleUrls: ['./critter-modal.component.scss'],
})
export class CritterModalComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private hemisphereSelectorService: HemisphereSelectorService,
    private savedEntityService: SavedEntityService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CritterModalComponent>
  ) {}

  icon$ = this.savedEntityService
    .isSaved(this.data['file-name'])
    .pipe<string>(map((e) => (e ? 'star' : 'star_border')));

  ngOnInit(): void {
    // {icon_uri: string, image_uri: string, name: Map<string, string>, availability: Availability}
  }

  toggleSaveState() {
    this.savedEntityService.isSaved(this.data['file-name']).subscribe((d) => {
      if (d) {
        this.savedEntityService.remove(this.data['file-name']);
      } else {
        this.savedEntityService.save(this.data['file-name'], this.data['entityType']);
      }
      this.dialogRef.close();
    });
  }

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }

  get availableMonths() {
    return this.hemisphereSelectorService.getHemisphere() == 'southern'
      ? this.data.availability.monthArraySouthern
      : this.data.availability.monthArrayNorthern;
  }
}
