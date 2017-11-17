import {Actions, Effect} from '@ngrx/effects';
import * as ClientViewActions from '../store/client-view.actions';
import * as ClientViewReducers from '../store/client-view.reducers';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/withLatestFrom';
import {HttpClient, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {ClientViewModel} from "../client-view.model";

@Injectable()
export class ClientViewEffects {


  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<ClientViewReducers.FeatureState>) {}

  @Effect()
  recipeFetch = this.actions$
    .ofType(ClientViewActions.FETCH_CLIENT_VIEW)
    .switchMap((action: ClientViewActions.FetchClientView) => {
      return this.httpClient.get<ClientViewModel[]>('http://localhost:8080/api/client_view', {
        observe: 'body',
        responseType: 'json'
      });
    })
    .map(
      (recipes) => {
        console.log(recipes);
        return {
          type: ClientViewActions.SET_CLIENT_VIEW,
          payload: recipes
        };
      }
    );

}
