import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CritterBoardComponent } from './critter-board.component';

describe('CritterBoardComponent', () => {
  let component: CritterBoardComponent;
  let fixture: ComponentFixture<CritterBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CritterBoardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CritterBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
