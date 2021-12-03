import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UpcomingBirthdaysComponent } from './upcoming-birthdays/upcoming-birthdays.component';
import { OwnedSongsComponent } from './owned-songs/owned-songs.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, FlexLayoutModule, MaterialModule, HomeRoutingModule],
  declarations: [HomeComponent, UpcomingBirthdaysComponent, OwnedSongsComponent],
})
export class HomeModule {}
