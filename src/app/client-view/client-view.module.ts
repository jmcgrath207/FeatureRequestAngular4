import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ClientViewComponent } from './client-view.component';
import {ClientViewRoutingModule} from "./client-view-routing.module";
import { TicketTableComponent } from './client-view-main/ticket-table/ticket-table.component';
import { TicketDefaultViewComponent } from './client-view-sidebar/ticket-default-view/ticket-default-view.component';
import { TicketOverViewComponent } from './client-view-sidebar/ticket-overview/ticket-overview.component';
import {
  MatInputModule, MatFormFieldModule, MatSelectModule, MatTableModule,
  MatPaginatorModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StoreModule} from "@ngrx/store";
import {ClientViewReducer} from "./store/client-view.reducers";
import {EffectsModule} from "@ngrx/effects";
import {ClientViewEffects} from "./store/client-view.effects";
import { TicketHistoryComponent } from './client-view-main/ticket-history/ticket-history.component';
import { TicketCommentsComponent } from './client-view-main/ticket-comments/ticket-comments.component';
import { TicketNewComponent } from './client-view-main/ticket/ticket-new/ticket-new.component';
import { TicketComponent } from './client-view-main/ticket/ticket.component';
import { TicketEditComponent } from './client-view-main/ticket/ticket-edit/ticket-edit.component';



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
    MatPaginatorModule,
    ReactiveFormsModule,
    StoreModule.forFeature('clientview', ClientViewReducer),
    EffectsModule.forFeature([ClientViewEffects])
  ],
  declarations: [ ClientViewComponent,
                  TicketTableComponent,
                  TicketDefaultViewComponent,
                  TicketOverViewComponent,
                  TicketHistoryComponent,
                  TicketCommentsComponent,
                  TicketNewComponent,
                  TicketComponent,
                  TicketEditComponent],
  exports: [
  ],
})
export class ClientViewModule { }
