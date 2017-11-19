import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as ClientViewActions from '../store/client-view.actions';
import * as ClientViewReducers from '../store/client-view.reducers';
import {Store} from "@ngrx/store";
import {ClientViewModel} from "../client-view.model";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/take';


/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.css']
})
export class TicketTableComponent  implements OnInit {

  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<ClientViewModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  clientviewState: Observable<ClientViewReducers.State>;


  constructor(private store: Store<ClientViewReducers.FeatureState>) { }


  ngOnInit() {
    // returns true if in edit mode

        this.store.dispatch(new ClientViewActions.FetchClientView());
        // TODO: Fix issue where first return is emptry clientview Array
        this.store.select('clientview').take(2).subscribe(
          (clientViewState: ClientViewReducers.State) => {
            console.log(clientViewState);
            console.log('log')
          }

        );
     /*   this.dataSource = new MatTableDataSource(clientViewData);*/
      }



  private initTable() {
  }

  }






