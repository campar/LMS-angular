import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultiesCardComponent } from './faculties-card.component';

describe('FacultiesCardComponent', () => {
  let component: FacultiesCardComponent;
  let fixture: ComponentFixture<FacultiesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultiesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
