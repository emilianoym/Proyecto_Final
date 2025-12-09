import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewPostBtn } from './new-post';

describe('NewPost', () => {
  let component: NewPostBtn;
  let fixture: ComponentFixture<NewPostBtn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPostBtn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostBtn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
