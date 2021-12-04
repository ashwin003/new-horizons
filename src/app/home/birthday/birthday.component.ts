import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.scss'],
})
export class BirthdayComponent implements OnInit {
  @Input() month: string = '';
  @Input() date: number = 0;
  constructor() {}

  ngOnInit(): void {}
}
