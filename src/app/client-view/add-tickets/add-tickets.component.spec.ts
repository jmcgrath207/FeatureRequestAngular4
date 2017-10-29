import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTicketsComponent } from './add-tickets.component';

describe('AddTicketsComponent', () => {
  let component: AddTicketsComponent;
  let fixture: ComponentFixture<AddTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
