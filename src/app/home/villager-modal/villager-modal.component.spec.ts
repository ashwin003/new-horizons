import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillagerModalComponent } from './villager-modal.component';

describe('VillagerModalComponent', () => {
  let component: VillagerModalComponent;
  let fixture: ComponentFixture<VillagerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VillagerModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VillagerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
