import { Component, OnInit } from '@angular/core';
import { FossilService } from '../services/fossil.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-fossils',
  templateUrl: './fossils.component.html',
  styleUrls: ['./fossils.component.scss'],
})
export class FossilsComponent implements OnInit {
  fossils: any[] = [];
  constructor(private fossilService: FossilService, private translationService: TranslationService) {}

  ngOnInit(): void {
    this.fossilService.getAll().subscribe((response) => (this.fossils = response));
  }

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }
}
