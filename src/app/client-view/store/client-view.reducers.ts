import {State} from "@ngrx/store";


import * as ClientViewActions from './client-view.actions';
import * as fromApp from '../../store/app.reducers';
import {ClientViewModel} from "../client-view.model";

export interface FeatureState extends fromApp.AppState{
  recipes: State;

}

export interface State {
  recipes: ClientViewModel[];
}



const initialState: State = { };


export function  ClientViewReducer(state = initialState, action: ClientViewActions.ClientViewActions) {
  switch (action.type) {
    case (RecipeActions.SET_RECIPIE):
      return {
        ...state,
        recipes: [...action.payload]
      };
    default:
      return state;
  }
}
