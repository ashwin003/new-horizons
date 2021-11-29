import { Component, Input, OnInit } from '@angular/core';
import { TimeService } from '@shared/services/time.service';

@Component({
  selector: 'app-seasonality',
  templateUrl: './seasonality.component.html',
  styleUrls: ['./seasonality.component.scss'],
})
export class SeasonalityComponent implements OnInit {
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  @Input() availableMonths: number[] = [];
  currentMonth: number = 0;
  constructor(private timeService: TimeService) {}

  ngOnInit(): void {
    this.currentMonth = this.timeService.getCurrentMonth();
  }

  isAvailable(month: number) {
    return this.availableMonths.includes(month + 1);
  }
}
