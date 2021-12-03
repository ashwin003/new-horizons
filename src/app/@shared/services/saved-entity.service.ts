import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SavedEntityService {
  constructor() {}

  save(fileName: string, entityType: string) {}

  remove(fileName: string) {}

  isSaved(fileName: string) {}
}
