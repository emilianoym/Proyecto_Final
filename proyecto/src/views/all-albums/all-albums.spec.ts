import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAlbums } from './all-albums';

describe('AllAlbums', () => {
  let component: AllAlbums;
  let fixture: ComponentFixture<AllAlbums>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllAlbums]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAlbums);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
