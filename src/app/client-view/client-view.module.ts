import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule} from "@angular/forms";
import { ClientViewComponent } from './client-view.component';
import {ClientViewRoutingModule} from "./client-view-routing.module";
import { TicketTableComponent } from './client-view-main/ticket-table/ticket-table.component';
import { TicketEditComponent } from './client-view-main/ticket-edit/ticket-edit.component';
import { TicketAddComponent } from './client-view-main/ticket-add/ticket-add.component';
import { TicketDefaultViewComponent } from './client-view-sidebar/ticket-default-view/ticket-default-view.component';
import { TicketInfoComponent } from './client-view-sidebar/ticket-info/ticket-info.component';
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
    StoreModule.forFeature('clientview', ClientViewReducer),
    EffectsModule.forFeature([ClientViewEffects])
  ],
  declarations: [ ClientViewComponent,
                  TicketTableComponent,
                  TicketEditComponent,
                  TicketAddComponent,
                  TicketDefaultViewComponent,
                  TicketInfoComponent,
                  TicketHistoryComponent,
                  TicketCommentsComponent],
  exports: [
  ],
})
export class ClientViewModule { }
