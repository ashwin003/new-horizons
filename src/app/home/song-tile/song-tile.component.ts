import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-song-tile',
  templateUrl: './song-tile.component.html',
  styleUrls: ['./song-tile.component.scss'],
})
export class SongTileComponent implements OnInit {
  @Input() song: Song = {
    fileName: '',
    id: 1,
    imageUri: '',
    musicUri: '',
    name: new Map(),
  };
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {}

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }
}
