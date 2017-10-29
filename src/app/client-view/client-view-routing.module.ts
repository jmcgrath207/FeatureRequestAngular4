import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {AddTicketsComponent} from "./add-tickets/add-tickets.component";
import {ClientViewComponent} from "./client-view.component";
import {ViewTicketsComponent} from "./view-tickets/view-tickets.component";


// TODO: Need to fix child routing issues
const recipesRoutes: Routes = [
  {path: '', component: ClientViewComponent, children: [
    {path: 'test', component: ViewTicketsComponent},
    { path: 'new', component: AddTicketsComponent },
  ]},
];


@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],

})
export class ClientViewRoutingModule { }
