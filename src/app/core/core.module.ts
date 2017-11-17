import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import {reducers} from "../store/app.reducers";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers),
    //EffectsModule.forRoot([AuthEffects])
  ],
  declarations: [HomeComponent, HeaderComponent],
  exports: [
    HeaderComponent
  ],
})
export class CoreModule { }
