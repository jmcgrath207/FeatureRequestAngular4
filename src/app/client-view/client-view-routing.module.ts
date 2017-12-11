import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {ClientViewComponent} from "./client-view.component";
import {TicketDefaultViewComponent} from "./client-view-sidebar/ticket-default-view/ticket-default-view.component";
import {TicketOverViewComponent} from "./client-view-sidebar/ticket-overview/ticket-overview.component";
import {TicketTableComponent} from "./client-view-main/ticket-table/ticket-table.component";
import {TicketCommentsComponent} from "./client-view-main/ticket-comments/ticket-comments.component";
import {TicketComponent} from "./client-view-main/ticket/ticket.component";




const recipesRoutes: Routes = [
  {path: 'clientview', component: ClientViewComponent, children: [
      {path: '', component: TicketTableComponent, outlet: 'clientViewMain'},
      {path: '', component: TicketDefaultViewComponent, outlet: 'clientViewSidebar'},
      {path: 'comments/:ticketOriginalId', component: TicketCommentsComponent, outlet: 'clientViewMain'},
      {path: ':type/:arrayPosition', component: TicketComponent, outlet: 'clientViewMain'},
      {path: 'tickettable', component: TicketTableComponent, outlet: 'clientViewMain'}, // added twice to since multi router outlet needs to match on a path name
      {path: 'overview/:arrayPosition', component: TicketOverViewComponent, outlet: 'clientViewSidebar'},


  ]},
];


@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],

})
export class ClientViewRoutingModule { }
