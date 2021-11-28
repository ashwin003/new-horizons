import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Villager } from '../models/villager';
import { TranslationService } from '../services/translation.service';
import { VillagerModalComponent } from '../villager-modal/villager-modal.component';

@Component({
  selector: 'app-villager-tile',
  templateUrl: './villager-tile.component.html',
  styleUrls: ['./villager-tile.component.scss'],
})
export class VillagerTileComponent implements OnInit {
  language = 'USen';
  @Input() villager: Villager;
  constructor(private translationService: TranslationService, private matDialog: MatDialog) {
    this.villager = {
      id: 1,
      fileName: 'file-name',
      birthday: '01-01',
      birthdayString: 'January 01',
      bubbleColor: 'red',
      textColor: 'white',
      catchPhrase: '',
      imageUri: 'assets/villagers.png',
      iconUri: 'assets/villagers.png',
      gender: '',
      hobby: '',
      personality: '',
      saying: '',
      species: '',
      subtype: '',
      name: new Map<string, string>(),
      catchTranslations: new Map<string, string>(),
    };
  }

  ngOnInit(): void {}

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }

  openModal() {
    this.matDialog.open(VillagerModalComponent, {
      data: this.villager,
    });
  }
}
