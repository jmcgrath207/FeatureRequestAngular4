import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketDefaultViewComponent } from './ticket-default-view.component';

describe('TicketDefaultViewComponent', () => {
  let component: TicketDefaultViewComponent;
  let fixture: ComponentFixture<TicketDefaultViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketDefaultViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketDefaultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
