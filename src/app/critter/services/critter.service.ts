import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CritterService {
  constructor(private httpClient: HttpClient) {}

  getAll(critter: string): Observable<any[]> {
    return this.httpClient
      .get<Map<string, Object>>('/v1/' + critter)
      .pipe(map((r: Map<string, Object>) => Object.keys(r).map((d) => this.convertToCritter(r[d]))));
  }

  private convertToCritter(critter: Map<string, any>) {
    critter['availability'] = {
      monthArrayNorthern: critter['availability']['month-array-northern'],
      monthArraySouthern: critter['availability']['month-array-southern'],
      timeArray: critter['availability']['time-array'],
    };

    return critter;
  }
}
