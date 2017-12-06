import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";
import * as ClientViewReducers from "../../store/client-view.reducers";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  arrayPosition: number;
  ticketForm: FormGroup;
  infoMode: boolean;
  editMode: boolean;
  addMode: boolean;
  clientViewState: Observable<ClientViewReducers.State>;


  constructor(private route: ActivatedRoute,
              private router: Router,
              public fb: FormBuilder,
              private store: Store<ClientViewReducers.FeatureState>) {

              this.infoMode = false;
              this.editMode = false;
              this.addMode = false;
  }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {


          this.arrayPosition = params.arrayPosition;
          this.initTemplate(params);


      }
    );
  }


  private initTemplate(params: Params) {
    if (params.type == 'info') {
      this.infoMode = true;
      this.clientViewState = this.store.select('clientview');

    }



    if (params.type == 'edit') {
      this.editMode = true;
      this.store.select('clientview')
        .take(1)
        .subscribe((clientViewState: ClientViewReducers.State) => {
          const ticketTable = clientViewState.ticketTable[this.arrayPosition];
          this.ticketForm = this.fb.group({
            ticketTitle: [ticketTable.ticketTitle, Validators.required]
          })
        });

    }
    if (params.type == 'add') {
      this.editMode = true;
      this.store.select('clientview')
        .take(1)
        .subscribe((clientViewState: ClientViewReducers.State) => {
          const ticketTable = clientViewState.ticketTable[this.arrayPosition];
          this.ticketForm = this.fb.group({
            ticketTitle: ["", Validators.required]
          })
        });

    }
  }

}
