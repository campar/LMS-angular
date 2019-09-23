import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectsNavbarComponent } from './subjects-navbar.component';

describe('SubjectsNavbarComponent', () => {
  let component: SubjectsNavbarComponent;
  let fixture: ComponentFixture<SubjectsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
