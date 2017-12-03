


import * as ClientViewActions from './client-view.actions';
import * as fromApp from '../../store/app.reducers';
import {TicketTableModel} from "../client-view-main/ticket-table/ticket-table.model";
import {CommentsTableModel} from "../client-view-main/ticket-comments/comments-table.model";





export interface FeatureState extends fromApp.AppState{
  clientview: State;

}


export interface State {
  ticketTable: TicketTableModel[];
  commentsTable: CommentsTableModel[];
}


// TODO: Create Client View Information
const initialState: State = {
  ticketTable: [ new TicketTableModel()],
  commentsTable: [new CommentsTableModel()]
};


export function  ClientViewReducer(state = initialState, action: ClientViewActions.ClientViewActions) {
  switch (action.type) {
    case (ClientViewActions.SET_TICKET_TABLE):
      return {
        ...state,
        ticketTable: [...action.ticketTable]
      };
    case (ClientViewActions.SET_COMMENTS_TABLE):
      return {
        ...state,
        commentsTable: [...action.commentsTable]
      };
    default:
      return state;
  }
}
