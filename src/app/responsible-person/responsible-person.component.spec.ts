import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiblePersonComponent } from './responsible-person.component';

describe('ResponsiblePersonComponent', () => {
  let component: ResponsiblePersonComponent;
  let fixture: ComponentFixture<ResponsiblePersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiblePersonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiblePersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
