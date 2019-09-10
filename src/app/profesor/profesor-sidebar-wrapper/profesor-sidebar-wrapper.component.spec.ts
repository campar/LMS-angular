import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorSidebarWrapperComponent } from './profesor-sidebar-wrapper.component';

describe('ProfesorSidebarWrapperComponent', () => {
  let component: ProfesorSidebarWrapperComponent;
  let fixture: ComponentFixture<ProfesorSidebarWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesorSidebarWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorSidebarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
