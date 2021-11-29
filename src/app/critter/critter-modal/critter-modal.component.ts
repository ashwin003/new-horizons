import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HemisphereSelectorService } from '@app/shell/services/hemisphere-selector.service';
import { TranslationService } from '@shared/services/translation.service';

@Component({
  selector: 'app-critter-modal',
  templateUrl: './critter-modal.component.html',
  styleUrls: ['./critter-modal.component.scss'],
})
export class CritterModalComponent implements OnInit {
  constructor(
    private translationService: TranslationService,
    private hemisphereSelectorService: HemisphereSelectorService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

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
