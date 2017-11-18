import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {reducers} from "../store/app.reducers";

import {StoreModule} from "@ngrx/store";
import {environment} from "../../environments/environment";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    //EffectsModule.forRoot([AuthEffects]),
    EffectsModule.forRoot([]), // Needs to be a blank list if not being used
    StoreRouterConnectingModule,
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : []
  ],
  declarations: [HomeComponent, HeaderComponent],
  exports: [
    HeaderComponent
  ],
})
export class CoreModule { }
