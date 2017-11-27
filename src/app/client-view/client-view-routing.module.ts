import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {ClientViewComponent} from "./client-view.component";
import {TicketAddComponent} from "./client-view-main/ticket-add/ticket-add.component";
import {TicketDefaultViewComponent} from "./client-view-sidebar/ticket-default-view/ticket-default-view.component";
import {TicketEditComponent} from "./client-view-main/ticket-edit/ticket-edit.component";
import {TicketInfoComponent} from "./client-view-sidebar/ticket-info/ticket-info.component";
import {TicketTableComponent} from "./client-view-main/ticket-table/ticket-table.component";
import {TicketCommentsComponent} from "./client-view-main/ticket-comments/ticket-comments.component";



// TODO: Need to fix routing issue where router does not redirect when matching
const recipesRoutes: Routes = [
  {path: 'clientview', component: ClientViewComponent, children: [
    {path: '', component: TicketTableComponent, outlet: 'clientViewMain'},
    {path: '', component: TicketDefaultViewComponent, outlet: 'clientViewSidebar'},
    {path: 'comments', component: TicketCommentsComponent, outlet: 'clientViewMain'},
    {path: 'tickettable', component: TicketTableComponent, outlet: 'clientViewMain'}, // added twice to since multi router outlet needs to match on a path name
    {path: 'info/:arrayPosition', component: TicketInfoComponent, outlet: 'clientViewSidebar'},

  ]},
];


@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],

})
export class ClientViewRoutingModule { }
