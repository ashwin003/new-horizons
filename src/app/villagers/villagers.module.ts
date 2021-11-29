import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { VillagersRoutingModule } from './villagers-routing.module';

import { VillagerListComponent } from './villager-list.component';
import { VillagerTileComponent } from './villager-tile/villager-tile.component';
import { VillagerModalComponent } from './villager-modal/villager-modal.component';
import { VillagerFilterComponent } from './villager-filter/villager-filter.component';

@NgModule({
  declarations: [VillagerListComponent, VillagerTileComponent, VillagerModalComponent, VillagerFilterComponent],
  imports: [CommonModule, TranslateModule, SharedModule, MaterialModule, LazyLoadImageModule, VillagersRoutingModule],
})
export class VillagersModule {}
