import {Component, OnInit, ViewChild} from '@angular/core';
import { films } from './data-table-demo3-data';
import { DataTable, DataTableTranslations, DataTableResource } from 'angular-4-data-table';

@Component({
  selector: 'app-view-tickets',
  templateUrl: './view-tickets.component.html',
  styleUrls: ['./view-tickets.component.css']
})
export class ViewTicketsComponent  {




  filmResource = new DataTableResource(films);
  films = [];
  filmCount = 0;

  @ViewChild(DataTable) filmsTable;

  constructor() {
    this.filmResource.count().then(count => this.filmCount = count);
  }

  reloadFilms(params) {
    this.filmResource.query(params).then(films => this.films = films);
  }


  // special params:
  translations = <DataTableTranslations>{
    indexColumn: 'Index column',
    expandColumn: 'Expand column',
    selectColumn: 'Select column',
    paginationLimit: 'Max results',
    paginationRange: 'Result range'
  };

}
