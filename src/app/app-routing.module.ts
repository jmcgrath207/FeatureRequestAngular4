import { NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {AddTicketsComponent} from "./client-view/add-tickets/add-tickets.component";
import {ViewTicketsComponent} from "./client-view/view-tickets/view-tickets.component";

const appRoutes: Routes = [

  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'addtickets', component: AddTicketsComponent},
  {path: 'viewtickets', component: ViewTicketsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
