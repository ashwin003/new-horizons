import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HemisphereSelectorService {
  private hemisphereKey = 'hemisphere';
  constructor() {}

  getHemisphere() {
    return localStorage.getItem(this.hemisphereKey);
  }

  setHemisphere(hemisphere: string) {
    localStorage.setItem(this.hemisphereKey, hemisphere);
  }
}
