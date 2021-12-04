import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Gifting } from '../models/gifting';
import { GiftingService } from '../services/gifting.service';

@Component({
  selector: 'app-gifting-modal',
  templateUrl: './gifting-modal.component.html',
  styleUrls: ['./gifting-modal.component.scss'],
})
export class GiftingModalComponent implements OnInit {
  constructor(private giftingService: GiftingService, @Inject(MAT_DIALOG_DATA) public data: string) {}

  gifting: Gifting | null = null;
  ngOnInit(): void {
    this.giftingService.getGifting(this.data).subscribe((g) => (this.gifting = g));
  }
}
