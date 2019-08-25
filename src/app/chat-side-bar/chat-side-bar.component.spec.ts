import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSideBarComponent } from './chat-side-bar.component';

describe('ChatSideBarComponent', () => {
  let component: ChatSideBarComponent;
  let fixture: ComponentFixture<ChatSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
