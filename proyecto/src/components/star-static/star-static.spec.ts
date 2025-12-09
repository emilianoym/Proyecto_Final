import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarStatic } from './star-static';

describe('StarStatic', () => {
  let component: StarStatic;
  let fixture: ComponentFixture<StarStatic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarStatic]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarStatic);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
