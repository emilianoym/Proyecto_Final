import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostPopular } from './post-popular';

describe('PostPopular', () => {
  let component: PostPopular;
  let fixture: ComponentFixture<PostPopular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostPopular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPopular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
