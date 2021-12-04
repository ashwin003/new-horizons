import { Component, OnInit } from '@angular/core';
import { Aggregate } from './models/aggregate';
import { AggregatorService } from './services/aggregator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;

  fishLoading = false;
  fishAggregation: Aggregate | null = null;

  seaLoading = false;
  seaAggregation: Aggregate | null = null;

  bugLoading = false;
  bugAggregation: Aggregate | null = null;

  artLoading = false;
  artAggregation: Aggregate | null = null;

  fossilLoading = false;
  fossilAggregation: Aggregate | null = null;
  constructor(private aggregatorService: AggregatorService) {}

  ngOnInit() {
    this.fishLoading = true;
    this.aggregatorService.getFishAggregation().subscribe((a) => {
      this.fishAggregation = a;
      this.fishLoading = false;
    });

    this.seaLoading = true;
    this.aggregatorService.getSeaAggregation().subscribe((a) => {
      this.seaAggregation = a;
      this.seaLoading = false;
    });

    this.bugLoading = true;
    this.aggregatorService.getBugsAggregation().subscribe((a) => {
      this.bugAggregation = a;
      this.bugLoading = false;
    });

    this.artLoading = true;
    this.aggregatorService.getArtAggregation().subscribe((a) => {
      this.artAggregation = a;
      this.artLoading = false;
    });

    this.fossilLoading = true;
    this.aggregatorService.getFossilAggregation().subscribe((a) => {
      this.fossilAggregation = a;
      this.fossilLoading = false;
    });
  }
}
