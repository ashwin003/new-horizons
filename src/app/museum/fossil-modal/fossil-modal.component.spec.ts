import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilModalComponent } from './fossil-modal.component';

describe('FossilModalComponent', () => {
  let component: FossilModalComponent;
  let fixture: ComponentFixture<FossilModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FossilModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FossilModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
