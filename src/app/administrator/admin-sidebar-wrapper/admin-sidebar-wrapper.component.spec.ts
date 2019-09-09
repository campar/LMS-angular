import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSidebarWrapperComponent } from './admin-sidebar-wrapper.component';

describe('AdminSidebarWrapperComponent', () => {
  let component: AdminSidebarWrapperComponent;
  let fixture: ComponentFixture<AdminSidebarWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSidebarWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSidebarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
