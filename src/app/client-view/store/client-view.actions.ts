

import {Action} from "@ngrx/store";
import {ClientViewModel} from "../client-view.model";

export const SET_CLIENT_VIEW =  'SET_CLIENT_VIEW';
export const FETCH_CLIENT_VIEW =  'FETCH_CLIENT_VIEW';



export class SetClientView implements Action {
  readonly type = SET_CLIENT_VIEW;

  constructor(public payload: ClientViewModel[]) {}
}

export class FetchClientView implements Action {
  readonly type = FETCH_CLIENT_VIEW;
}

export type ClientViewActions = FetchClientView | SetClientView;
