import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { UpcomingBirthdaysComponent } from './upcoming-birthdays/upcoming-birthdays.component';
import { OwnedSongsComponent } from './owned-songs/owned-songs.component';
import { BirthdayComponent } from './birthday/birthday.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    LazyLoadImageModule,
    FlexLayoutModule,
    MaterialModule,
    HomeRoutingModule,
  ],
  declarations: [HomeComponent, UpcomingBirthdaysComponent, OwnedSongsComponent, BirthdayComponent],
})
export class HomeModule {}
