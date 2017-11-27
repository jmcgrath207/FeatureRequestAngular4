import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCommentsComponent } from './ticket-comments.component';

describe('TicketCommentsComponent', () => {
  let component: TicketCommentsComponent;
  let fixture: ComponentFixture<TicketCommentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketCommentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
