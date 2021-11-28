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
      .pipe(map((v: Map<string, Object>) => Object.keys(v).map((k) => v[k])));
  }
}
