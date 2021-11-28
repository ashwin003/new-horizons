import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterTileComponent } from './critter-tile.component';

describe('CritterTileComponent', () => {
  let component: CritterTileComponent;
  let fixture: ComponentFixture<CritterTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CritterTileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
