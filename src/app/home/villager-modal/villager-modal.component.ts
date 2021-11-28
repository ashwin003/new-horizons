import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Villager } from '../models/villager';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-villager-modal',
  templateUrl: './villager-modal.component.html',
  styleUrls: ['./villager-modal.component.scss'],
})
export class VillagerModalComponent implements OnInit {
  constructor(private translationService: TranslationService, @Inject(MAT_DIALOG_DATA) public data: Villager) {}

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
