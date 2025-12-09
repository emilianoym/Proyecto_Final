import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPostView } from './new-post-view';
describe('NewPostView', () => {
  let component: NewPostView;
  let fixture: ComponentFixture<NewPostView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPostView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
