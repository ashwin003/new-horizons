import { Component, OnInit } from '@angular/core';
import { FossilService } from '../services/fossil.service';
import { TranslationService } from '@shared/services/translation.service';
import { MatDialog } from '@angular/material/dialog';
import { FossilModalComponent } from '../fossil-modal/fossil-modal.component';

@Component({
  selector: 'app-fossils',
  templateUrl: './fossils.component.html',
  styleUrls: ['./fossils.component.scss'],
})
export class FossilsComponent implements OnInit {
  fossils: any[] = [];
  constructor(
    private fossilService: FossilService,
    private translationService: TranslationService,
    private matDialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fossilService.getAll().subscribe((response) => (this.fossils = response));
  }

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }

  openModal(fossil: any) {
    this.matDialog.open(FossilModalComponent, {
      data: fossil,
    });
  }
}
