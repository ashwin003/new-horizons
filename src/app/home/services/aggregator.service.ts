import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SavedEntityService } from '@app/@shared/services/saved-entity.service';
import { forkJoin, map, Observable } from 'rxjs';
import { Aggregate } from '../models/aggregate';

@Injectable({
  providedIn: 'root',
})
export class AggregatorService {
  constructor(private httpClient: HttpClient, private savedEntityService: SavedEntityService) {}

  getFishAggregation(): Observable<Aggregate> {
    return forkJoin([this.getApiCount('fish'), this.getSaved('Fish')]).pipe(
      map((e) => {
        const [total, saved] = e;
        return {
          owned: saved,
          total: total,
        };
      })
    );
  }

  getSeaAggregation(): Observable<Aggregate> {
    return forkJoin([this.getApiCount('sea'), this.getSaved('Sea')]).pipe(
      map((e) => {
        const [total, saved] = e;
        return {
          owned: saved,
          total: total,
        };
      })
    );
  }

  getBugsAggregation(): Observable<Aggregate> {
    return forkJoin([this.getApiCount('bugs'), this.getSaved('Bug')]).pipe(
      map((e) => {
        const [total, saved] = e;
        return {
          owned: saved,
          total: total,
        };
      })
    );
  }

  getArtAggregation(): Observable<Aggregate> {
    return forkJoin([this.getApiCount('art'), this.getSaved('Art')]).pipe(
      map((e) => {
        const [total, saved] = e;
        return {
          owned: saved,
          total: total,
        };
      })
    );
  }

  getFossilAggregation(): Observable<Aggregate> {
    return forkJoin([this.getApiCount('fossils'), this.getSaved('Fossil')]).pipe(
      map((e) => {
        const [total, saved] = e;
        return {
          owned: saved,
          total: total,
        };
      })
    );
  }

  getApiCount(dataType: string): Observable<number> {
    return this.httpClient.get<Map<string, Object>>('/v1/' + dataType).pipe(map((f) => Object.keys(f).length));
  }

  getSaved(entityType: string): Observable<number> {
    return this.savedEntityService.getCount(entityType);
  }
}
