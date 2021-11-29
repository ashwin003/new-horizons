import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SongsRoutingModule } from './songs-routing.module';

import { SliderSongsComponent } from './slider-songs/slider-songs.component';
import { SongTileComponent } from './song-tile/song-tile.component';
import { SongsComponent } from './songs.component';
import { BackgroundMusicComponent } from './background-music/background-music.component';

@NgModule({
  declarations: [SliderSongsComponent, SongTileComponent, SongsComponent, BackgroundMusicComponent],
  imports: [CommonModule, TranslateModule, SharedModule, MaterialModule, LazyLoadImageModule, SongsRoutingModule],
})
export class SongsModule {}
