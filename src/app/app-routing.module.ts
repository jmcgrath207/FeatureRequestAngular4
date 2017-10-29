import { NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";
import {AddTicketsComponent} from "./client-view/add-tickets/add-tickets.component";
import {ViewTicketsComponent} from "./client-view/view-tickets/view-tickets.component";
import {ClientViewComponent} from "./client-view/client-view.component";

const appRoutes: Routes = [

  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'clientview', component: ClientViewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
