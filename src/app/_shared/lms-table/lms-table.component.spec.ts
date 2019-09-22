import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsTableComponent } from './lms-table.component';

describe('LmsTableComponent', () => {
  let component: LmsTableComponent;
  let fixture: ComponentFixture<LmsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
