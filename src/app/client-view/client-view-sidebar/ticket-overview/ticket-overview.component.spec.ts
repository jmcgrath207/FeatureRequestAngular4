import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketOverViewComponent } from './ticket-overview.component';

describe('TicketOverViewComponent', () => {
  let component: TicketOverViewComponent;
  let fixture: ComponentFixture<TicketOverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketOverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketOverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
