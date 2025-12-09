import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlbumsPopular } from './albums-popular';

describe('AlbumsPopular', () => {
  let component: AlbumsPopular;
  let fixture: ComponentFixture<AlbumsPopular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsPopular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsPopular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
