


import * as ClientViewActions from './client-view.actions';
import * as fromApp from '../../store/app.reducers';
import {ClientViewModel} from "../client-view.model";





export interface FeatureState extends fromApp.AppState{
  clientview: State;

}


export interface State {
  clientview: ClientViewModel[];
}


// TODO: Create Client View Information
const initialState: State = {
  clientview: []
};


export function  ClientViewReducer(state = initialState, action: ClientViewActions.ClientViewActions) {
  switch (action.type) {
    case (ClientViewActions.SET_CLIENT_VIEW):
      return {
        ...state,
        recipes: [...action.payload]
      };
    default:
      return state;
  }
}
