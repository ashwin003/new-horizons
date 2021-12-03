import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlayService {
  playing = false;
  player = new Audio();
  currentlyPlaying: string | null = null;
  constructor() {
    const instance = this;
    this.player.addEventListener('ended', function () {
      instance.currentlyPlaying = null;
      instance.playing = false;
    });
  }

  play(uri: string) {
    this.currentlyPlaying = uri;
    this.player.src = uri;
    this.player.play();
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
    this.player.pause();
    this.playing = false;
  }

  isPlaying(uri: string) {
    return this.currentlyPlaying == uri && this.playing;
  }
}
