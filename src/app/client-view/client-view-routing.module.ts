import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AddTicketsComponent} from "./add-tickets/add-tickets.component";
import {ClientViewComponent} from "./client-view.component";
import {ViewTicketsComponent} from "./view-tickets/view-tickets.component";


// TODO: Need to fix child routing issues
const recipesRoutes: Routes = [
  {path: 'clientview', component: ClientViewComponent, children: [
    {path: '', component: ViewTicketsComponent},
    {path: 'add', component: AddTicketsComponent},
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],

})
export class ClientViewRoutingModule { }
