import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ArtService } from '../services/art.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
})
export class ArtComponent implements OnInit {
  artWorks: any[] = [];
  constructor(private artService: ArtService, private translationService: TranslationService) {}

  ngOnInit(): void {
    this.artService.getAll().subscribe((response) => {
      this.artWorks = response;
    });
  }

  getValue(dictionary: Map<string, string>, prefix: string) {
    return this.translationService.getValue(dictionary, prefix);
  }
}
