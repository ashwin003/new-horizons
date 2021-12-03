import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Villager } from '../models/villager';
import { TranslationService } from '@shared/services/translation.service';
import { SavedEntityService } from '@app/@shared/services/saved-entity.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-villager-modal',
  templateUrl: './villager-modal.component.html',
  styleUrls: ['./villager-modal.component.scss'],
})
export class VillagerModalComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private savedEntityService: SavedEntityService,
    @Inject(MAT_DIALOG_DATA) public data: Villager,
    public dialogRef: MatDialogRef<VillagerModalComponent>
  ) {}

  icon$ = this.savedEntityService.isSaved(this.data.fileName).pipe<string>(map((e) => (e ? 'star' : 'star_border')));

  ngOnInit(): void {}

  toggleSaveState() {
    this.savedEntityService.isSaved(this.data.fileName).subscribe((d) => {
      if (d) {
        this.savedEntityService.remove(this.data.fileName);
      } else {
        this.savedEntityService.save(this.data.fileName, 'Villager');
      }
      this.dialogRef.close();
    });
  }

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }

  getMonthName(birthdayString: string): string {
    return birthdayString.split(' ')[0];
  }

  getDate(birthdayString: string): string {
    return birthdayString.split(' ')[1];
  }
}
