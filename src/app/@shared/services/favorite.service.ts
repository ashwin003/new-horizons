import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  constructor() {}

  setFavorite(fileName: string, entityType: string) {}

  removeFromFavorites(fileName: string) {}

  getFavorites(entityType: string) {}

  exists(fileName: string): Observable<Boolean> {
    return of(false);
  }
}
