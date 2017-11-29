import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {ActivatedRoute, Params, Router} from "@angular/router";
import * as ClientViewActions from '../../store/client-view.actions';
import * as ClientViewReducers from '../../store/client-view.reducers';

@Component({
  selector: 'app-ticket-comments',
  templateUrl: './ticket-comments.component.html',
  styleUrls: ['./ticket-comments.component.css']
})
export class TicketCommentsComponent implements OnInit {

  clientViewState: Observable<ClientViewReducers.State>;
  ticketOriginalId: number;


  constructor(private route: ActivatedRoute,
              private store: Store<ClientViewReducers.FeatureState>) { }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.ticketOriginalId = params.ticketOriginalId;
        this.clientViewState = this.store.select('clientview');
      }
    );
  }

}
