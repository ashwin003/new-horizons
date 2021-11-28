import { Villager } from '../models/villager';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VillagerService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient
      .get<Map<string, Villager>>('/v1/villagers')
      .pipe(
        map((v: Map<string, Villager>) => Object.keys(v).map((k) => this.convertToVillager(v[k] as Map<string, any>)))
      );
  }

  private convertToVillager(data: Map<string, any>): Villager {
    return {
      id: data['id'],
      fileName: data['file-name'],
      name: data['name'],
      birthday: data['birthday'],
      birthdayString: data['birthday-string'],
      personality: data['personality'],
      subtype: data['subtype'],
      bubbleColor: data['bubbleColor'],
      catchPhrase: data['catch-phrase'],
      catchTranslations: data['catch-translations'],
      gender: data['gender'],
      hobby: data['hobby'],
      iconUri: data['icon_uri'],
      imageUri: data['image_uri'],
      saying: data['saying'],
      species: data['species'],
      textColor: data['text-color'],
    };
  }
}
