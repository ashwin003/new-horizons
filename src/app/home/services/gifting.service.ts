import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Gifting } from '../models/gifting';

@Injectable({
  providedIn: 'root',
})
export class GiftingService {
  constructor(private httpClient: HttpClient) {}

  getGifting(fileName: string): Observable<Gifting> {
    return this.httpClient
      .get<Map<string, Gifting>>('/assets/data/gifting.json', {
        headers: {
          'x-avoid-proxy': 'true',
        },
      })
      .pipe(
        map((r) => {
          var hasData = Object.keys(r).includes(fileName);
          return hasData ? r[fileName] : r['default'];
        })
      );
  }
}
