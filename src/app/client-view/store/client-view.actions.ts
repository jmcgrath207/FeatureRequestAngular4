

import {Action} from "@ngrx/store";


export const Fetch_Client_View =  'Fetch_Client_View';



export class FetchClientView implements Action {
  readonly type = Fetch_Client_View;
}

export type RecipeActions = FetchClientView;
