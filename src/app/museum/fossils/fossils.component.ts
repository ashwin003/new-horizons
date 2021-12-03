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
    this.fossilService.getAll().subscribe((response) => (this.fossils = this.sortData(response)));
  }

  sortData(data: any[]) {
    return data.sort(this.sorter);
  }

  sorter(a: any, b: any): any {
    const sortOrder = ['skull', 'chest', 'torso', 'pelvis', 'tail'];
    const aPart = a['part-of'],
      bPart = b['part-of'];

    const bodyPartIndex = (name: any) => {
      const splitted = name.split('_');
      return sortOrder.indexOf(splitted[splitted.length - 1]);
    };
    if (aPart === bPart) {
      const aIndex = bodyPartIndex(a.fileName),
        bIndex = bodyPartIndex(b.fileName);
      return aIndex - bIndex;
    }
    return aPart - bPart;
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
