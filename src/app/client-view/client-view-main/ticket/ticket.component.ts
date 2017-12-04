import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Params, Router} from "@angular/router";
import * as ClientViewReducers from "../../store/client-view.reducers";

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  arrayPosition: number;
  ticketForm: FormGroup;


  constructor(private route: ActivatedRoute,
              private router: Router,
              public fb: FormBuilder,
              private store: Store<ClientViewReducers.FeatureState>) { }


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        if (params.type == 'info') {
          this.arrayPosition = params.arrayPosition;
          this.initForm();
        }

      }
    );
  }


  private initForm() {
      this.store.select('clientview')
        .take(1)
        .subscribe((clientViewState: ClientViewReducers.State) => {
          const ticketTable = clientViewState.ticketTable[this.arrayPosition];
          this.ticketForm = this.fb.group({
            ticketTitle: [ticketTable.ticketTitle, Validators.required]
            })
      });

  }

}
