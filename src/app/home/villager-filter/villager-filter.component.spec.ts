import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagerFilterComponent } from './villager-filter.component';

describe('VillagerFilterComponent', () => {
  let component: VillagerFilterComponent;
  let fixture: ComponentFixture<VillagerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VillagerFilterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
