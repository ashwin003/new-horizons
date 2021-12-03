import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FossilService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get<Map<string, Object>>('/v1/fossils')
      .pipe(map((r: Map<string, Object>) => Object.keys(r).map((d) => this.convertToFossil(r[d]))));
  }

  private convertToFossil(critter: Map<string, any>) {
    critter['fileName'] = critter['file-name'];
    critter['museumPhrase'] = critter['museum-phrase'];
    critter['imageUri'] = critter['image_uri'];

    return critter;
  }
}
