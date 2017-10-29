import { NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";

const appRoutes: Routes = [

  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
