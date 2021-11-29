import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CritterRoutingModule } from './critter-routing.module';

import { CritterComponent } from './critter.component';
import { CritterBoardComponent } from './critter-board/critter-board.component';
import { CritterTileComponent } from './critter-tile/critter-tile.component';
import { CritterModalComponent } from './critter-modal/critter-modal.component';
import { SeasonalityComponent } from './seasonality/seasonality.component';
import { ActiveHoursComponent } from './active-hours/active-hours.component';

@NgModule({
  declarations: [
    CritterComponent,
    CritterBoardComponent,
    CritterTileComponent,
    CritterModalComponent,
    SeasonalityComponent,
    ActiveHoursComponent,
  ],
  imports: [CommonModule, TranslateModule, SharedModule, MaterialModule, LazyLoadImageModule, CritterRoutingModule],
})
export class CritterModule {}
