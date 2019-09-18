import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionSidebarWrapperComponent } from './discussion-sidebar-wrapper.component';

describe('DiscussionSidebarWrapperComponent', () => {
  let component: DiscussionSidebarWrapperComponent;
  let fixture: ComponentFixture<DiscussionSidebarWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionSidebarWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionSidebarWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
