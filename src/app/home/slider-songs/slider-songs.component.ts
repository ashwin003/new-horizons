import { Component, OnInit } from '@angular/core';
import { Song } from '../models/song';
import { SliderService } from '../services/slider.service';

@Component({
  selector: 'app-slider-songs',
  templateUrl: './slider-songs.component.html',
  styleUrls: ['./slider-songs.component.scss'],
})
export class SliderSongsComponent implements OnInit {
  songs: Song[] = [];
  constructor(private sliderService: SliderService) {}

  ngOnInit(): void {
    this.sliderService.getAll().subscribe((songs) => (this.songs = songs));
  }
}
