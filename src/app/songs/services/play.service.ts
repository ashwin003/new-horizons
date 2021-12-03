import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayService {
  playing = false;
  currentlyPlaying: string | null = null;
  constructor() {}

  play(uri: string) {
    this.currentlyPlaying = uri;
    this.playing = true;
  }

  togglePlayPause(uri: string) {
    if (this.playing) {
      this.pause();
      if (this.currentlyPlaying != uri) {
        this.play(uri);
      }
    } else {
      this.play(uri);
    }
  }

  pause() {
    this.playing = false;
  }

  isPlaying(uri: string) {
    return this.currentlyPlaying == uri && this.playing;
  }
}
