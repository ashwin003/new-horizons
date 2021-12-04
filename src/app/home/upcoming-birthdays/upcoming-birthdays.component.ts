import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslationService } from '@app/@shared/services/translation.service';
import { GiftingModalComponent } from '../gifting-modal/gifting-modal.component';
import { Villager } from '../models/villager';
import { ListService } from '../services/list.service';

@Component({
  selector: 'app-upcoming-birthdays',
  templateUrl: './upcoming-birthdays.component.html',
  styleUrls: ['./upcoming-birthdays.component.scss'],
})
export class UpcomingBirthdaysComponent implements OnInit {
  isLoading = false;
  villagers: Villager[] = [];
  constructor(
    private translationService: TranslationService,
    private listService: ListService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.listService.getSavedVillagers().subscribe((villagers) => {
      this.villagers = this.sortByUpcomingBirthdays(villagers);
      this.isLoading = false;
    });
  }

  sortByUpcomingBirthdays(villagers: Villager[]) {
    return villagers.sort(this.sorter);
  }

  sorter(a: Villager, b: Villager): number {
    const padLeft = (val: string) => (parseInt(val) < 10 ? '0' + val : val);
    const transformBirthday = (birthday: string) => {
      const [date, month] = birthday.split('/');
      const finalValue = padLeft(month) + padLeft(date);
      return parseInt(finalValue);
    };
    const getCurrentDayString = () => {
      const date = new Date();
      return date.getDate() + '/' + (date.getMonth() + 1);
    };

    const getDifference = (a: number, b: number) => {
      return a - b < 0 ? 366 + a - b : a - b;
    };
    const currentDate = transformBirthday(getCurrentDayString());
    const aDate = transformBirthday(a.birthday),
      bDate = transformBirthday(b.birthday);
    const aDiff = getDifference(aDate, currentDate),
      bDiff = getDifference(bDate, currentDate);
    return aDiff - bDiff;
  }

  openModal(fileName: string) {
    this.matDialog.open(GiftingModalComponent, {
      data: fileName,
    });
  }

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }

  getMonthName(birthdayString: string): string {
    return birthdayString.split(' ')[0];
  }

  getDate(birthdayString: string): number {
    return parseInt(birthdayString.split(' ')[1].replace('th', '').replace('nd', '').replace('st', ''));
  }
}
