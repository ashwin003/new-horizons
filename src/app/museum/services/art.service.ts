import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ArtService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get<Map<string, Object>>('/v1/art')
      .pipe(map((r: Map<string, Object>) => Object.keys(r).map((d) => this.convertToArt(r[d]))));
  }

  private convertToArt(critter: Map<string, any>) {
    critter['fileName'] = critter['file-name'];
    critter['museumPhrase'] = critter['museum-desc'];
    critter['imageUri'] = critter['image_uri'];

    return critter;
  }
}
