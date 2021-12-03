import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { MuseumRoutingModule } from './museum-routing.module';

import { MuseumComponent } from './museum.component';
import { FossilsComponent } from './fossils/fossils.component';
import { ArtComponent } from './art/art.component';
import { FossilModalComponent } from './fossil-modal/fossil-modal.component';
import { ArtModalComponent } from './art-modal/art-modal.component';

@NgModule({
  declarations: [MuseumComponent, FossilsComponent, ArtComponent, FossilModalComponent, ArtModalComponent],
  imports: [CommonModule, TranslateModule, SharedModule, MaterialModule, LazyLoadImageModule, MuseumRoutingModule],
})
export class MuseumModule {}
