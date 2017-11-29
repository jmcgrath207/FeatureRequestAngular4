import {Actions, Effect} from '@ngrx/effects';
import * as ClientViewActions from '../store/client-view.actions';
import * as ClientViewReducers from '../store/client-view.reducers';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {TicketTableModel} from "../client-view-main/ticket-table/ticket-table.model";

@Injectable()
export class ClientViewEffects {


  constructor(private actions$: Actions,
              private httpClient: HttpClient) {}

  @Effect()
  getLatestTicketsFetch = this.actions$
    .ofType(ClientViewActions.FETCH_CLIENT_VIEW)
    .switchMap((action: ClientViewActions.FetchClientView) => {
      return this.httpClient.get<TicketTableModel[]>('http://localhost:8080/api/getlatesttickets', {
        observe: 'body',
        responseType: 'json'
      });
    })
    .map(
      (ticketTable) => {
        return {
          type: ClientViewActions.SET_CLIENT_VIEW,
          ticketTable: ticketTable
        };
      }
    );

/*  @Effect()
  recipeFetch = this.actions$
    .ofType(ClientViewActions.FETCH_CLIENT_VIEW)
    .switchMap((action: ClientViewActions.FetchClientView) => {
      return this.httpClient.get<TicketTableModel[]>('http://localhost:8080/api/getlatesttickets', {
        observe: 'body',
        responseType: 'json'
      });
    })
    .map(
      (clientview) => {
        return {
          type: ClientViewActions.SET_CLIENT_VIEW,
          payload: clientview
        };
      }
    );*/

}
