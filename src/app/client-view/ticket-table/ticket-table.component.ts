import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import * as RecipeActions from '../store/recipe.actions';
import * as fromRecipe from '../store/recipe.reducers';
import {Store} from "@ngrx/store";

/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-ticket-table',
  templateUrl: './ticket-table.component.html',
  styleUrls: ['./ticket-table.component.css']
})
export class TicketTableComponent  implements OnInit {


  constructor(private store: Store<fromRecipe.FeatureState>) { }


  ngOnInit() {
    // returns true if in edit mode
        this.initForm();
      }



  private initForm() {}

  }






