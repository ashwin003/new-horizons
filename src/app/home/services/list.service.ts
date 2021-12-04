import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favorite } from '@app/@shared/models/favorite';
import { SavedEntityService } from '@app/@shared/services/saved-entity.service';
import { forkJoin, map, Observable } from 'rxjs';
import { Villager } from '../models/villager';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  constructor(private httpClient: HttpClient, private savedEntityService: SavedEntityService) {}

  getSavedVillagers(): Observable<Villager[]> {
    return forkJoin([this.getAll(), this.getFavorites()]).pipe(
      map((entry) => {
        const [villagers, neighbours] = entry;
        const neighbourFiles = neighbours.map((n) => n.fileName);
        return villagers.filter((v) => neighbourFiles.includes(v.fileName));
      })
    );
  }

  getFavorites(): Observable<Favorite[]> {
    return this.savedEntityService.getAll('Villager');
  }

  getAll(): Observable<Villager[]> {
    return this.httpClient
      .get<Map<string, Villager>>('/v1/villagers')
      .pipe(
        map((v: Map<string, Villager>) => Object.keys(v).map((k) => this.convertToVillager(v[k] as Map<string, any>)))
      );
  }

  private convertToVillager(data: Map<string, any>): Villager {
    return {
      fileName: data['file-name'],
      name: data['name'],
      birthday: data['birthday'],
      birthdayString: data['birthday-string'],
      iconUri: data['icon_uri'],
    };
  }
}
