import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregledStudenataComponent } from './pregled-studenata.component';

describe('PregledStudenataComponent', () => {
  let component: PregledStudenataComponent;
  let fixture: ComponentFixture<PregledStudenataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregledStudenataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregledStudenataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
