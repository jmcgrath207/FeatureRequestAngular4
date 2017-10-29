import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTicketsComponent } from './view-tickets/view-tickets.component';
import { AddTicketsComponent } from './add-tickets/add-tickets.component';
import {DataTableModule} from "angular-4-data-table";
import {FormsModule} from "@angular/forms";
import { ClientViewComponent } from './client-view.component';
import {ClientViewRoutingModule} from "./client-view-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DataTableModule,
    ClientViewRoutingModule
  ],
  declarations: [ViewTicketsComponent, AddTicketsComponent, ClientViewComponent],
  exports: [
  ],
})
export class ClientViewModule { }
