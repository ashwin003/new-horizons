import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FavoriteService } from '@app/@shared/services/favorite.service';
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
    private favoriteService: FavoriteService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  starticon$ = this.favoriteService.exists(this.data.fileName).pipe(map((e) => (e ? 'star' : 'star_border')));

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }

  ngOnInit(): void {}
}
