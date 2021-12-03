import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Villager } from './models/villager';
import { VillagerService } from './services/villager.service';
import { filter } from 'rxjs/operators';
import { UntilDestroy, untilDestroyed } from '@shared';

@UntilDestroy()
@Component({
  selector: 'app-villager-list',
  templateUrl: './villager-list.component.html',
  styleUrls: ['./villager-list.component.scss'],
})
export class VillagerListComponent implements OnInit {
  @ViewChild('villagerfilter', { static: false }) villagerfilter!: MatSidenav;

  villagers: Villager[] = [];
  filterParameters = new Map<string, any[]>();
  constructor(private villagerService: VillagerService, private media: MediaObserver) {}

  ngOnInit(): void {
    this.villagerService.getAll().subscribe((villagers) => (this.villagers = villagers));

    this.media
      .asObservable()
      .pipe(
        filter((changes: MediaChange[]) =>
          changes.some((change) => change.mqAlias !== 'xs' && change.mqAlias !== 'sm')
        ),
        untilDestroyed(this)
      )
      .subscribe(() => this.villagerfilter.close());
  }

  onFilterChanged(filterParameters: Map<string, any[]>) {
    this.villagerfilter.toggle();
    this.filterParameters = filterParameters;
  }

  get filteredVillagers(): Villager[] {
    const filterKeys = [...this.filterParameters.keys()].filter(
      (key) => this.filterParameters.get(key)?.length ?? 0 > 0
    );
    if (this.filterParameters.size == 0 || filterKeys.length == 0) {
      return this.villagers;
    }

    return this.villagers.filter((villager) => {
      return filterKeys
        .map((k) => {
          const filterParameterValues = this.filterParameters.get(k);
          return (
            filterParameterValues == undefined ||
            filterParameterValues == null ||
            filterParameterValues.length == 0 ||
            filterParameterValues.includes(villager[k])
          );
        })
        .reduce((prev, curr) => prev && curr, true);
    });
  }
}
