import { Component, Input, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { CritterModalComponent } from '../critter-modal/critter-modal.component';
import { CritterService } from '../services/critter.service';
import { TranslationService } from '@shared/services/translation.service';

@Component({
  selector: 'app-critter-board',
  templateUrl: './critter-board.component.html',
  styleUrls: ['./critter-board.component.scss'],
})
export class CritterBoardComponent implements OnInit {
  @Input() critter = '';
  @Input() entityType = '';
  data: any[] = [];
  highlightAvailable = false;

  constructor(
    private critterService: CritterService,
    private translationService: TranslationService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.critterService.getAll(this.critter).subscribe((response) => (this.data = response));
  }

  checkboxChanged(event: MatCheckboxChange) {
    this.highlightAvailable = event.checked;
  }

  openDialog(critter: any) {
    critter.entityType = this.entityType;
    this.matDialog.open(CritterModalComponent, {
      data: critter,
    });
  }

  get columnCount(): number {
    return this.data.length == 0 ? 1 : this.data.length / 5;
  }

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }
}
