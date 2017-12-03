import {Actions, Effect} from '@ngrx/effects';
import * as ClientViewActions from '../store/client-view.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {TicketTableModel} from "../client-view-main/ticket-table/ticket-table.model";
import {CommentsTableModel} from "../client-view-main/ticket-comments/comments-table.model";

@Injectable()
export class ClientViewEffects {


  constructor(private actions$: Actions,
              private httpClient: HttpClient) {}

  @Effect()
  getLatestTicketsFetch = this.actions$
    .ofType(ClientViewActions.FETCH_TICKET_TABLE)
    .switchMap((action: ClientViewActions.FetchTicketTable) => {
      return this.httpClient.get<TicketTableModel[]>('http://localhost:8080/api/getlatesttickets', {
        observe: 'body',
        responseType: 'json'
      });
    })
    .map(
      (ticketTable) => {
        return {
          type: ClientViewActions.SET_TICKET_TABLE,
          ticketTable: ticketTable
        };
      }
    );

  @Effect()
  getcommentsbyticketoriginalidFetch = this.actions$
    .ofType(ClientViewActions.FETCH_COMMENTS_TABLE)
    .switchMap((action: ClientViewActions.FetchCommentsTable) => {
      return this.httpClient.
      get<CommentsTableModel[]>('http://localhost:8080/api/getcommentsbyticketoriginalid/' + action.ticketOriginalId,
        {
        observe: 'body',
        responseType: 'json'
      });
    })
    .map(
      (commentsTable) => {
        return {
          type: ClientViewActions.SET_COMMENTS_TABLE,
          commentsTable: commentsTable
        };
      }
    );

}
