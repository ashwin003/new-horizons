import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { VillagerListComponent } from './villager-list/villager-list.component';
import { VillagerTileComponent } from './villager-tile/villager-tile.component';
import { CritterComponent } from './critter/critter.component';
import { CritterBoardComponent } from './critter-board/critter-board.component';
import { CritterTileComponent } from './critter-tile/critter-tile.component';
import { CritterModalComponent } from './critter-modal/critter-modal.component';
import { SeasonalityComponent } from './seasonality/seasonality.component';
import { ActiveHoursComponent } from './active-hours/active-hours.component';
import { MuseumComponent } from './museum/museum.component';
import { FossilsComponent } from './fossils/fossils.component';
import { ArtComponent } from './art/art.component';
import { VillagerModalComponent } from './villager-modal/villager-modal.component';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SliderSongsComponent } from './slider-songs/slider-songs.component';
import { SongTileComponent } from './song-tile/song-tile.component';
import { SongsComponent } from './songs/songs.component';
import { BackgroundMusicComponent } from './background-music/background-music.component';
import { VillagerFilterComponent } from './villager-filter/villager-filter.component';
import { SettingsModalComponent } from './settings-modal/settings-modal.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    LazyLoadImageModule,
    HomeRoutingModule,
  ],
  declarations: [
    HomeComponent,
    VillagerListComponent,
    VillagerTileComponent,
    CritterComponent,
    CritterBoardComponent,
    CritterTileComponent,
    CritterModalComponent,
    SeasonalityComponent,
    ActiveHoursComponent,
    MuseumComponent,
    FossilsComponent,
    ArtComponent,
    VillagerModalComponent,
    SliderSongsComponent,
    SongTileComponent,
    SongsComponent,
    BackgroundMusicComponent,
    VillagerFilterComponent,
    SettingsModalComponent,
  ],
})
export class HomeModule {}
