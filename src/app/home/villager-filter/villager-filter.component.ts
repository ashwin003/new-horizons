import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatListOption } from '@angular/material/list';
import { Villager } from '../models/villager';

@Component({
  selector: 'app-villager-filter',
  templateUrl: './villager-filter.component.html',
  styleUrls: ['./villager-filter.component.scss'],
})
export class VillagerFilterComponent implements OnInit {
  @Input() villagers: Villager[] = [];

  @Output() filterParametersChanged = new EventEmitter<Map<string, any[]>>();
  constructor() {}

  ngOnInit(): void {}

  get availableSpecies(): string[] {
    return this.villagers.map((v) => v.species).filter((x, i, a) => a.indexOf(x) == i);
  }

  get availablePersonalities(): string[] {
    return this.villagers.map((v) => v.personality).filter((x, i, a) => a.indexOf(x) == i);
  }

  get availableHobbies(): string[] {
    return this.villagers.map((v) => v.hobby).filter((x, i, a) => a.indexOf(x) == i);
  }

  get availableGenders(): string[] {
    return this.villagers.map((v) => v.gender).filter((x, i, a) => a.indexOf(x) == i);
  }

  submitSelctions(
    species: MatListOption[],
    personalities: MatListOption[],
    hobbies: MatListOption[],
    genders: MatListOption[]
  ) {
    const filterParameters = new Map([
      ['species', species.map((s) => s.value)],
      ['personality', personalities.map((s) => s.value)],
      ['hobby', hobbies.map((s) => s.value)],
      ['gender', genders.map((s) => s.value)],
    ]);
    this.filterParametersChanged.emit(filterParameters);
  }
}
