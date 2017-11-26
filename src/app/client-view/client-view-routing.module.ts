import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {ClientViewComponent} from "./client-view.component";
import {TicketAddComponent} from "./ticket-add/ticket-add.component";
import {TicketDefaultViewComponent} from "./ticket-default-view/ticket-default-view.component";
import {TicketEditComponent} from "./ticket-edit/ticket-edit.component";
import {TicketInfoComponent} from "./ticket-info/ticket-info.component";
import {TicketTableComponent} from "./ticket-table/ticket-table.component";
import {TicketCommentsComponent} from "./ticket-comments/ticket-comments.component";



// TODO: Need to fix routing issue where router does not redirect when matching
const recipesRoutes: Routes = [
  {path: 'clientview', component: ClientViewComponent, children: [
    {path: '', component: TicketTableComponent, outlet: 'clientViewMain'},
    {path: 'comments', component: TicketCommentsComponent, outlet: 'clientViewMain'},
    {path: '', component: TicketDefaultViewComponent, outlet: 'clientViewSidebar'},
    {path: 'info/:arrayPosition', component: TicketInfoComponent, outlet: 'clientViewSidebar'},

  ]},
];


@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],

})
export class ClientViewRoutingModule { }
