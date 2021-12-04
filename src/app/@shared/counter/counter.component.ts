import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() header = '';
  @Input() count = 0;
  @Input() total = 0;
  @Input() headerType = 'primary';
  @Input() isLoading = false;
}
