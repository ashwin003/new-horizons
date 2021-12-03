import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FavoriteService } from '@app/@shared/services/favorite.service';
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
    private favoriteService: FavoriteService,
    private hemisphereSelectorService: HemisphereSelectorService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  starticon$ = this.favoriteService.exists(this.data.fileName).pipe(map((e) => (e ? 'star' : 'star_border')));
  ngOnInit(): void {
    // {icon_uri: string, image_uri: string, name: Map<string, string>, availability: Availability}
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
