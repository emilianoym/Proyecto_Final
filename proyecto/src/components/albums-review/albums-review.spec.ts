import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsReview } from './albums-review';

describe('AlbumsReview', () => {
  let component: AlbumsReview;
  let fixture: ComponentFixture<AlbumsReview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsReview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsReview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
