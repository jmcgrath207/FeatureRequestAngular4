import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import * as ClientViewReducers from './store/client-view.reducers';
import * as ClientViewActions from './store/client-view.actions';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  // Testing if Store works correctly in constructor
  constructor(private store: Store<ClientViewReducers.FeatureState>) {
    this.store.dispatch(new ClientViewActions.FetchTicketTable());
  }

  ngOnInit() {


  }

}
