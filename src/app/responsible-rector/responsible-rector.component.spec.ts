import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibleRectorComponent } from './responsible-rector.component';

describe('ResponsibleRectorComponent', () => {
  let component: ResponsibleRectorComponent;
  let fixture: ComponentFixture<ResponsibleRectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibleRectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibleRectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
