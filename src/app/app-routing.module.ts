import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  Shell.childRoutes([
    { path: 'villagers', loadChildren: () => import('./villagers/villagers.module').then((m) => m.VillagersModule) },
  ]),
  Shell.childRoutes([
    { path: 'critter', loadChildren: () => import('./critter/critter.module').then((m) => m.CritterModule) },
  ]),
  Shell.childRoutes([
    { path: 'museum', loadChildren: () => import('./museum/museum.module').then((m) => m.MuseumModule) },
  ]),
  Shell.childRoutes([{ path: 'songs', loadChildren: () => import('./songs/songs.module').then((m) => m.SongsModule) }]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
