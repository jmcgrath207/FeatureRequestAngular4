///<reference path="../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import * as ClientViewReducers from '../../store/client-view.reducers';

@Component({
  selector: 'app-ticket-overview',
  templateUrl: './ticket-overview.component.html',
  styleUrls: ['./ticket-overview.component.css']
})
export class TicketOverViewComponent implements OnInit {

  clientViewState: Observable<ClientViewReducers.State>;
  arrayPosition: number;
  ticketOriginalId: number;
  isActive: string;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<ClientViewReducers.FeatureState>) { }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.arrayPosition = params.arrayPosition;
        this.clientViewState = this.store.select('clientview');
        this.store.select('clientview').take(2).subscribe(
          (clientViewState: ClientViewReducers.State) => {

            //Checks to see if there is a empty ticketTable object in the array.
            if (Object.keys(clientViewState.ticketTable[0]).length !== 0) {
              this.ticketOriginalId = clientViewState.ticketTable[this.arrayPosition].ticketOriginalId
            }
          });
      }
    );
  }


  openComments(){
    this.isActive = 'openComments';
    this.router.navigate(['/clientview', { outlets: { clientViewSidebar: ['overview',this.arrayPosition],
      clientViewMain: ['comments',this.ticketOriginalId]}}]);
  }

  openTicketTable(){
    this.isActive = 'openTicketTable';
    this.router.navigate(['/clientview', { outlets: { clientViewSidebar: ['overview',this.arrayPosition],
      clientViewMain: ['tickettable']}}]);
  }

  openTicketInfo(){
    this.isActive = 'openTicketInfo';
    this.router.navigate(['/clientview', { outlets: { clientViewSidebar: ['overview',this.arrayPosition],
        clientViewMain: ['info',this.arrayPosition]}}]);
  }
}
