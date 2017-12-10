import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Params} from "@angular/router";
import {CommentsTableModel} from "./comments-table.model";
import {FeatureState} from "../../store/client-view.reducers";
import {selectCommentTable} from "../../store/client-view.selector";
import {FetchCommentsTable} from "../../store/client-view.actions";

@Component({
  selector: 'app-ticket-comments',
  templateUrl: './ticket-comments.component.html',
  styleUrls: ['./ticket-comments.component.css']
})
export class TicketCommentsComponent implements OnInit {

  newCommentTable: any;
  ticketOriginalId: number;
  latestCommmentNumber: number;



  constructor(private route: ActivatedRoute,
              private store: Store<FeatureState>,
              ) {}


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.ticketOriginalId = params.ticketOriginalId;
        this.store.dispatch(new FetchCommentsTable(this.ticketOriginalId));
        this.store.select(selectCommentTable).take(2).subscribe(
          (data: any) => {
            if (Object.keys(data[0]).length !== 0) {
              let commmentNumber = data.length;
              data.forEach(function (element) {
                element["commentNumber"] = commmentNumber;
                commmentNumber = commmentNumber - 1;

              });
              this.newCommentTable = data;
              this.latestCommmentNumber =  data.length
            }
          }

        );
      }
    );
  }

}
