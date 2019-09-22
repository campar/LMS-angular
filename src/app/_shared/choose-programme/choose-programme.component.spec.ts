import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseProgrammeComponent } from './choose-programme.component';

describe('ChooseProgrammeComponent', () => {
  let component: ChooseProgrammeComponent;
  let fixture: ComponentFixture<ChooseProgrammeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseProgrammeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseProgrammeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
