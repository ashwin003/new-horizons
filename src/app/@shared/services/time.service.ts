import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  constructor() {}

  getCurrentMonth() {
    return new Date().getMonth();
  }

  getDayOffsetPercentage() {
    const currentTime = new Date();
    const currentDay = new Date();
    currentDay.setHours(0, 0, 0, 0);
    const hoursPassed = (currentTime.getTime() - currentDay.getTime()) / 1000 / 60 / 60;
    return (hoursPassed * 100) / 24;
  }

  isWithinAvailableHours(hours: number[]): boolean {
    const currentTime = new Date();
    return hours.includes(currentTime.getHours());
  }
}
