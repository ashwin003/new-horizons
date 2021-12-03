import { Component, Input, OnInit } from '@angular/core';
import { TimeService } from '@shared/services/time.service';

@Component({
  selector: 'app-active-hours',
  templateUrl: './active-hours.component.html',
  styleUrls: ['./active-hours.component.scss'],
})
export class ActiveHoursComponent implements OnInit {
  hours = Array.from(Array(24).keys());
  dayPercent: number = 0.0;
  @Input() activeHours: number[] = [];
  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.dayPercent = this.timeService.getDayOffsetPercentage();
  }

  needsFullHeight(hour: number) {
    return hour % 6 == 0;
  }

  isActiveIn(hour: number) {
    return this.activeHours.includes(hour);
  }

  convertTo12Hour(hour: number): number {
    if (hour == 0) {
      return 12;
    }
    if (hour > 12) {
      return hour - 12;
    }

    return hour;
  }

  toTOD(hour: number): string {
    return hour < 12 ? 'AM' : 'PM';
  }
}
