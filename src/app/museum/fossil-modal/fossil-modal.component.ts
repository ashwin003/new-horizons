import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslationService } from '@app/@shared/services/translation.service';

@Component({
  selector: 'app-fossil-modal',
  templateUrl: './fossil-modal.component.html',
  styleUrls: ['./fossil-modal.component.scss'],
})
export class FossilModalComponent implements OnInit {
  constructor(private translationService: TranslationService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }
}
