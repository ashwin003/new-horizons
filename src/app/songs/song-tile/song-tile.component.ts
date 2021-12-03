import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { TranslationService } from '@shared/services/translation.service';
import { PlayService } from '../services/play.service';

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
  constructor(private translationService: TranslationService, private playService: PlayService) {}

  ngOnInit(): void {}

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }

  get icon() {
    return this.playService.isPlaying(this.song.musicUri) ? 'pause' : 'play_arrow';
  }

  togglePlayPause() {
    this.playService.togglePlayPause(this.song.musicUri);
  }
}
