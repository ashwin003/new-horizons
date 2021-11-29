import { Component, OnInit } from '@angular/core';
import { HemisphereSelectorService } from '../services/hemisphere-selector.service';

@Component({
  selector: 'app-hemisphere-selector',
  templateUrl: './hemisphere-selector.component.html',
  styleUrls: ['./hemisphere-selector.component.scss'],
})
export class HemisphereSelectorComponent implements OnInit {
  available_hemispheres = ['northern', 'southern'];
  selected_hemisphere = this.hemisphereSelectorService.getHemisphere() || this.available_hemispheres[0];

  constructor(private hemisphereSelectorService: HemisphereSelectorService) {
    if (this.selected_hemisphere && !this.hemisphereSelectorService.getHemisphere()) {
      this.hemisphereSelectorService.setHemisphere(this.selected_hemisphere);
    }
  }

  ngOnInit(): void {}

  setHemisphere(hemisphere: string) {
    this.selected_hemisphere = hemisphere;
    this.hemisphereSelectorService.setHemisphere(hemisphere);
  }
}
