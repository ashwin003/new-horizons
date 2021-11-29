import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { MatDialog } from '@angular/material/dialog';
import { SettingsModalComponent } from '../settings-modal/settings-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;

  constructor(private titleService: Title, private matDialog: MatDialog) {}

  ngOnInit() {}

  get title(): string {
    return this.titleService.getTitle();
  }

  openSettingsModal() {
    this.matDialog.open(SettingsModalComponent);
  }
}
