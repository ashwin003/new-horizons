import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Villager } from '../models/villager';
import { TranslationService } from '@shared/services/translation.service';
import { FavoriteService } from '@app/@shared/services/favorite.service';
import { from, map } from 'rxjs';

@Component({
  selector: 'app-villager-modal',
  templateUrl: './villager-modal.component.html',
  styleUrls: ['./villager-modal.component.scss'],
})
export class VillagerModalComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private favoriteService: FavoriteService,
    @Inject(MAT_DIALOG_DATA) public data: Villager
  ) {}

  starticon$ = this.favoriteService.exists(this.data.fileName).pipe(map((e) => (e ? 'star' : 'star_border')));
  ngOnInit(): void {}

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
