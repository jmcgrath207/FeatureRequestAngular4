import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";
import * as ClientViewActions from '../../store/client-view.actions';
import * as ClientViewReducers from '../../store/client-view.reducers';

@Component({
  selector: 'app-ticket-info',
  templateUrl: './ticket-info.component.html',
  styleUrls: ['./ticket-info.component.css']
})
export class TicketInfoComponent implements OnInit {

  clientViewState: Observable<ClientViewReducers.State>;
  arrayPosition: number;


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


  openComments(){
    this.router.navigate(['/clientview', { outlets: { clientViewSidebar: ['info',this.arrayPosition],
      clientViewMain: ['comments']}}]);
  }

  openTicketTable(){
    this.router.navigate(['/clientview', { outlets: { clientViewSidebar: ['info',this.arrayPosition],
      clientViewMain: ['tickettable']}}]);
  }

}
