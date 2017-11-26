import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {ClientViewComponent} from "./client-view.component";
import {TicketAddComponent} from "./ticket-add/ticket-add.component";
import {TicketDefaultViewComponent} from "./ticket-default-view/ticket-default-view.component";
import {TicketEditComponent} from "./ticket-edit/ticket-edit.component";
import {TicketInfoComponent} from "./ticket-info/ticket-info.component";



// TODO: Need to fix routing issue where router does not redirect when matching
const recipesRoutes: Routes = [
  {path: 'clientview', component: ClientViewComponent, children: [
    {path: '', component: TicketDefaultViewComponent},
    {path: 'add', component: TicketAddComponent},
    {path: 'edit', component: TicketEditComponent},
    {path: ':arrayPosition', component: TicketInfoComponent},
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],

})
export class ClientViewRoutingModule { }
