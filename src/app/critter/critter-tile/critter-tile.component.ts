import { Component, Input, OnInit } from '@angular/core';
import { TimeService } from '@shared/services/time.service';
import { TranslationService } from '@shared/services/translation.service';

@Component({
  selector: 'app-critter-tile',
  templateUrl: './critter-tile.component.html',
  styleUrls: ['./critter-tile.component.scss'],
})
export class CritterTileComponent implements OnInit {
  @Input() critter = {
    icon_uri: 'assets/villagers.png',
    image_uri: 'assets/villagers.png',
    name: new Map(),
    availability: {
      monthArrayNorthern: [0],
      monthArraySouthern: [0],
      timeArray: [0],
    },
  };
  @Input() highlightAvailable = false;

  get highlighted(): boolean {
    return (
      this.highlightAvailable &&
      this.critter.availability.monthArrayNorthern.includes(this.timeService.getCurrentMonth() + 1) &&
      this.timeService.isWithinAvailableHours(this.critter.availability.timeArray)
    );
  }
  constructor(private translationService: TranslationService, private timeService: TimeService) {}

  ngOnInit(): void {}

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }
}
