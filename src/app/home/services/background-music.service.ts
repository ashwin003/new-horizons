import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { BackgroundMusic } from '../models/backgroundMusic';

@Injectable({
  providedIn: 'root',
})
export class BackgroundMusicService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get<Map<string, BackgroundMusic>>('/v1/backgroundmusic')
      .pipe(
        map((v: Map<string, BackgroundMusic>) =>
          Object.keys(v).map((k) => this.convertToSong(v[k] as Map<string, any>))
        )
      );
  }

  private convertToSong(data: Map<string, any>): BackgroundMusic {
    return {
      id: data['id'],
      fileName: data['file-name'],
      musicUri: data['music_uri'],
      hour: data['hour'],
      weather: data['weather'],
    };
  }
}
