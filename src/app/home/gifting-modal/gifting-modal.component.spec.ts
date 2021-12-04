import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftingModalComponent } from './gifting-modal.component';

describe('GiftingModalComponent', () => {
  let component: GiftingModalComponent;
  let fixture: ComponentFixture<GiftingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiftingModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
