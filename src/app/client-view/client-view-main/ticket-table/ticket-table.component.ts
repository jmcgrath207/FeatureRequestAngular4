import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as ClientViewActions from '../../store/client-view.actions';
import * as ClientViewReducers from '../../store/client-view.reducers';
import {Store} from "@ngrx/store";
import {TicketTableModel} from "./ticket-table.model"
import 'rxjs/add/operator/take';
import {ActivatedRoute, Router} from "@angular/router";


/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.css']
})
export class TicketTableComponent  implements OnInit  {

  displayedColumns = ['ticketTitle',
                       'updateDate',
                      'departmentDescription',
                      'ticketOwner',
                      'ticketDescription',
                      'targetDate'];

  dataSource: MatTableDataSource<TicketTableModel>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private store: Store<ClientViewReducers.FeatureState>,
              private router: Router,
              private route: ActivatedRoute) {}


  ngOnInit() {
    // returns true if in edit mode


    // TODO: Fix issue where first return is emptry clientview Array
    this.store.select('clientview').take(2).subscribe(
      (clientViewState: ClientViewReducers.State) => {
        if (clientViewState.ticketTable.length !== 0) {
          this.dataSource = new MatTableDataSource(clientViewState.ticketTable);
        }

      }
    );
    /*   this.dataSource = new MatTableDataSource(clientViewData);*/
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  handleRowClick(arrayPosition){
    this.router.navigate(['/clientview', { outlets: { clientViewSidebar: ['info',arrayPosition],
      clientViewMain: ['tickettable']}}]);
  }

}








