import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Song } from '../models/song';

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get<Map<string, Song>>('/v1/songs')
      .pipe(map((v: Map<string, Song>) => Object.keys(v).map((k) => this.convertToSong(v[k] as Map<string, any>))));
  }

  private convertToSong(data: Map<string, any>): Song {
    return {
      id: data['id'],
      fileName: data['file-name'],
      name: data['name'],
      musicUri: data['music_uri'],
      imageUri: data['image_uri'],
    };
  }
}
