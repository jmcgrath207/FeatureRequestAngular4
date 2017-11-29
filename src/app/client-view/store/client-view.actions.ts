

import {Action} from "@ngrx/store";
import {TicketTableModel} from "../client-view-main/ticket-table/ticket-table.model";
import {CommmetTableModel} from "../client-view-main/ticket-comments/commmet-table.model";

export const SET_CLIENT_VIEW =  'SET_CLIENT_VIEW';
export const FETCH_CLIENT_VIEW =  'FETCH_CLIENT_VIEW';



export class SetClientView implements Action {
  readonly type = SET_CLIENT_VIEW;

  constructor(public ticketTable: TicketTableModel[],
              public commentsTable: CommmetTableModel[] ) {}
}

export class FetchClientView implements Action {
  readonly type = FETCH_CLIENT_VIEW;
}

export type ClientViewActions = FetchClientView | SetClientView;
