import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterModalComponent } from './critter-modal.component';

describe('CritterModalComponent', () => {
  let component: CritterModalComponent;
  let fixture: ComponentFixture<CritterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CritterModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
