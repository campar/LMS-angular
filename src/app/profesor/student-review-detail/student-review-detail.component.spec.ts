import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentReviewDetailComponent } from './student-review-detail.component';

describe('StudentReviewDetailComponent', () => {
  let component: StudentReviewDetailComponent;
  let fixture: ComponentFixture<StudentReviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentReviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
