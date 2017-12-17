import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Params} from "@angular/router";
import {FeatureState} from "../../store/client-view.reducers";
import {selectCommentHistoryTable, selectCommentTable} from "../../store/client-view.selector";
import {FetchCommentHistoryTable, FetchCommentsTable} from "../../store/client-view.actions";
import "rxjs/add/operator/takeWhile";
import {CommentsTableModel} from "./comments-table.model";


@Component({
  selector: 'app-ticket-comments',
  templateUrl: './ticket-comments.component.html',
  styleUrls: ['./ticket-comments.component.css']
})
export class TicketCommentsComponent implements OnInit {

  newCommentTable: CommentsTableModel;
  newCommentHistoryObject: object = {};
  ticketOriginalId: number;
  latestCommmentNumber: number;





  constructor(private route: ActivatedRoute,
              private store: Store<FeatureState>,
              private cd: ChangeDetectorRef) {}


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.cd.markForCheck();
        this.ticketOriginalId = params.ticketOriginalId;
        this.store.dispatch(new FetchCommentsTable(this.ticketOriginalId));
        this.store.select(selectCommentTable).take(2).subscribe(
          (data: any) => {
            if (Object.keys(data[0]).length !== 0) {
              let commmentNumber = data.length;
              data.forEach(function (element) {
                element["commentNumber"] = commmentNumber;
                element["showHistory"] = false;
                commmentNumber = commmentNumber - 1;

              });
              this.newCommentTable = data;
              this.latestCommmentNumber =  data.length;
            }
          }

        );
      }
    );
  }

  toggleCommentHistory(index: number) {
    if(this.newCommentTable[index]["showHistory"] == false){
      this.store.dispatch(new FetchCommentHistoryTable(this.newCommentTable[index]["commentOriginalId"]));
      this.store.select(selectCommentHistoryTable).take(2).subscribe(
        (data: any) => {
          if (Object.keys(data[0]).length !== 0) {
            let commmentNumber = data.length;
            data.forEach(function (element) {
              element["commentNumber"] = commmentNumber;
              commmentNumber = commmentNumber - 1;

            });
            this.newCommentHistoryObject[index] = {
              'CommentHistory' : data,
              'CommentHistoryLength': data.length
            };
          }
        }

      );
      this.newCommentTable[index]["showHistory"] = true;
    }
    else {
      this.newCommentTable[index]["showHistory"] = false
    }

  }




}
