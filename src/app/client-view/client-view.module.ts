import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from "@angular/forms";
import { ClientViewComponent } from './client-view.component';
import {ClientViewRoutingModule} from "./client-view-routing.module";
import { TicketTableComponent } from './ticket-table/ticket-table.component';
import { TicketEditComponent } from './ticket-edit/ticket-edit.component';
import { TicketAddComponent } from './ticket-add/ticket-add.component';
import { TicketDefaultViewComponent } from './ticket-default-view/ticket-default-view.component';
import { TicketInfoComponent } from './ticket-info/ticket-info.component';
import {
  MatInputModule, MatFormFieldModule, MatSelectModule, MatTableModule,
  MatPaginatorModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClientViewRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  declarations: [ ClientViewComponent, TicketTableComponent, TicketEditComponent, TicketAddComponent, TicketDefaultViewComponent, TicketInfoComponent],
  exports: [
  ],
})
export class ClientViewModule { }
