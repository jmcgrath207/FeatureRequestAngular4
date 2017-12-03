import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import * as ClientViewReducers from "../../store/client-view.reducers";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  clientViewState: Observable<ClientViewReducers.State>;
  arrayPosition: number;
  ticketOriginalId: number;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<ClientViewReducers.FeatureState>) { }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.arrayPosition = params.arrayPosition;
        this.clientViewState = this.store.select('clientview');
      }
    );
  }

}
