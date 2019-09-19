import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSyllabusOutcomeComponent } from './create-syllabus-outcome.component';

describe('CreateSyllabusOutcomeComponent', () => {
  let component: CreateSyllabusOutcomeComponent;
  let fixture: ComponentFixture<CreateSyllabusOutcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSyllabusOutcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSyllabusOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
