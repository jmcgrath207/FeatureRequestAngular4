


import * as ClientViewActions from './client-view.actions';
import * as fromApp from '../../store/app.reducers';
import {TicketTableModel} from "../client-view-main/ticket-table/ticket-table.model";





export interface FeatureState extends fromApp.AppState{
  clientview: State;

}


export interface State {
  clientview: TicketTableModel[];
}


// TODO: Create Client View Information
const initialState: State = {
  clientview: [ new TicketTableModel()]
};


export function  ClientViewReducer(state = initialState, action: ClientViewActions.ClientViewActions) {
  switch (action.type) {
    case (ClientViewActions.SET_CLIENT_VIEW):
      return {
        ...state,
        clientview: [...action.payload]
      };
    default:
      return state;
  }
}
