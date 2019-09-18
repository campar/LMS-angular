import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorNavBarComponent } from './profesor-nav-bar.component';

describe('ProfesorNavBarComponent', () => {
  let component: ProfesorNavBarComponent;
  let fixture: ComponentFixture<ProfesorNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
