import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { HomeComponent } from './home.component';
import { Shell } from '@app/shell/shell.service';
import { VillagerListComponent } from './villager-list/villager-list.component';
import { CritterComponent } from './critter/critter.component';
import { MuseumComponent } from './museum/museum.component';
import { SongsComponent } from './songs/songs.component';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, data: { title: marker('Home') } },
    { path: 'villagers', component: VillagerListComponent, data: { title: marker('Villagers') } },
    { path: 'critter', component: CritterComponent, data: { title: marker('Critter') } },
    { path: 'museum', component: MuseumComponent, data: { title: marker('Museum') } },
    { path: 'songs', component: SongsComponent, data: { title: marker('Songs') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class HomeRoutingModule {}
