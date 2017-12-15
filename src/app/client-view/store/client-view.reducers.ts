


import * as ClientViewActions from './client-view.actions';
import * as fromApp from '../../store/app.reducers';
import {TicketTableModel} from "../client-view-main/ticket-table/ticket-table.model";
import {CommentsTableModel} from "../client-view-main/ticket-comments/comments-table.model";



/// Interface Creation

export interface FeatureState extends fromApp.AppState{
  clientview: State;

}


export interface State {
  ticketTable: TicketTableModel[];
  commentsTable: CommentsTableModel[];
  commentsHistoryTable: CommentsTableModel[];
}



const initialState: State = {
  ticketTable: [ new TicketTableModel()],
  commentsTable: [new CommentsTableModel()],
  commentsHistoryTable: [new CommentsTableModel()]
};


// Reducers


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
    case (ClientViewActions.SET_COMMENT_HISTORY_TABLE):
      return {
        ...state,
        commentsHistoryTable: [...action.commentsHistoryTable]
      };

    default:
      return state;
  }
}
