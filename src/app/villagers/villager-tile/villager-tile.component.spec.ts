import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagerTileComponent } from './villager-tile.component';

describe('VillagerTileComponent', () => {
  let component: VillagerTileComponent;
  let fixture: ComponentFixture<VillagerTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VillagerTileComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagerTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
