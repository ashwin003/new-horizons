import { Injectable } from '@angular/core';
import { Dexie, Table } from 'dexie';
import { from, map } from 'rxjs';
import { Favorite } from '../models/favorite';

@Injectable({
  providedIn: 'root',
})
export class SavedEntityService extends Dexie {
  savedEntities: Table<Favorite, string>;
  constructor() {
    super('NewHorizons');
    this.version(1).stores({
      savedEntities: 'fileName,entityType',
    });
    this.savedEntities = this.table<Favorite, string>('savedEntities');
  }

  save(fileName: string, entityType: string) {
    const entity: Favorite = {
      fileName,
      entityType,
    };
    this.savedEntities.add(entity, fileName);
  }

  remove(fileName: string) {
    this.savedEntities.delete(fileName);
  }

  isSaved(fileName: string) {
    return from(this.savedEntities.where({ fileName: fileName }).count()).pipe(map((c) => c > 0));
  }
}
