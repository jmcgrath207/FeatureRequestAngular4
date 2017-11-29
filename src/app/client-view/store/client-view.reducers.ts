


import * as ClientViewActions from './client-view.actions';
import * as fromApp from '../../store/app.reducers';
import {TicketTableModel} from "../client-view-main/ticket-table/ticket-table.model";
import {CommmetTableModel} from "../client-view-main/ticket-comments/commmet-table.model";





export interface FeatureState extends fromApp.AppState{
  clientview: State;

}


export interface State {
  ticketTable: TicketTableModel[];
  commentsTable: CommmetTableModel[];
}


// TODO: Create Client View Information
const initialState: State = {
  ticketTable: [ new TicketTableModel()],
  commentsTable: [new CommmetTableModel()]
};


export function  ClientViewReducer(state = initialState, action: ClientViewActions.ClientViewActions) {
  switch (action.type) {
    case (ClientViewActions.SET_CLIENT_VIEW):
      return {
        ...state,
        ticketTable: [...action.ticketTable]
      };
    default:
      return state;
  }
}
