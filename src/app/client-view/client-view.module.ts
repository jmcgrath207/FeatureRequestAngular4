import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { AddTicketsComponent } from './add-tickets/add-tickets.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ViewTicketsComponent, AddTicketsComponent],
  exports: [
  ],
})
export class ClientViewModule { }
