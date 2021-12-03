import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedSongsComponent } from './owned-songs.component';

describe('OwnedSongsComponent', () => {
  let component: OwnedSongsComponent;
  let fixture: ComponentFixture<OwnedSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnedSongsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnedSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
