import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslationService } from '@app/@shared/services/translation.service';

@Component({
  selector: 'app-art-modal',
  templateUrl: './art-modal.component.html',
  styleUrls: ['./art-modal.component.scss'],
})
export class ArtModalComponent implements OnInit {
  constructor(private translationService: TranslationService, @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }
}
