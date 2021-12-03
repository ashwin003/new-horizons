import { Component, OnInit } from '@angular/core';
import { BackgroundMusic } from '../models/backgroundMusic';
import { BackgroundMusicService } from '../services/background-music.service';
import { PlayService } from '../services/play.service';

@Component({
  selector: 'app-background-music',
  templateUrl: './background-music.component.html',
  styleUrls: ['./background-music.component.scss'],
})
export class BackgroundMusicComponent implements OnInit {
  songs: BackgroundMusic[] = [];
  constructor(private backgroundMusicService: BackgroundMusicService, private playService: PlayService) {}

  ngOnInit(): void {
    this.backgroundMusicService.getAll().subscribe((songs) => (this.songs = songs));
  }

  getHourDisplayText(hour: number): string {
    if (hour === 0) return 'Midnight';
    if (hour < 12) return hour + ' AM';
    if (hour === 12) return 'Noon';
    return hour - 12 + ' PM';
  }

  getIcon(uri: string) {
    return this.playService.isPlaying(uri) ? 'pause' : 'play_arrow';
  }

  togglePlayPause(uri: string) {
    this.playService.togglePlayPause(uri);
  }
}
