import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Params} from "@angular/router";
import {FeatureState} from "../../store/client-view.reducers";
import {selectCommentHistoryTable, selectCommentTable} from "../../store/client-view.selector";
import {FetchCommentHistoryTable, FetchCommentsTable} from "../../store/client-view.actions";
import "rxjs/add/operator/takeWhile";
import {CommentsTableModel} from "./comments-table.model";
import {default as dDiff} from 'deep-diff'
import {forEach} from "@angular/router/src/utils/collection";


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
              private store: Store<FeatureState>) {}


  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.ticketOriginalId = params.ticketOriginalId;
        this.store.dispatch(new FetchCommentsTable(this.ticketOriginalId));
        this.store.select(selectCommentTable).take(2).subscribe(
          (data: any) => {
            if (Object.keys(data[0]).length !== 0) {
              let commmentNumber = data.length;
              data.forEach(element => {
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
        (CommentHistoryData: any) => {
          if (Object.keys(CommentHistoryData[0]).length !== 0) {
            let commmentNumber = CommentHistoryData.length;
            CommentHistoryData.forEach(element => {



              element = this.commentdiff(CommentHistoryData,element,index);



              element["commentNumber"] = commmentNumber;
              commmentNumber = commmentNumber - 1;

            });
            this.newCommentHistoryObject[index] = {
              'CommentHistory' : CommentHistoryData,
              'CommentHistoryLength': CommentHistoryData.length
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




  private commentdiff(CommentHistoryData: any, element: CommentsTableModel, index: number) {

    let newObject = {};

    let dataIndexOf = CommentHistoryData.indexOf(element);

    //find difference between historical comment and current
    if (dataIndexOf + 1 == CommentHistoryData.length){
      let leftHandedSide = this.newCommentTable[index]; //old
      let rightHandedSide = element; //new
      let differences = dDiff.diff(leftHandedSide, rightHandedSide); // new
      differences.forEach(diff => {
        let changedKey = diff.path[0];
        if (diff.kind == "E" && changedKey != "commentId") {
          newObject[changedKey] = diff.lhs;
        }
      });



    }
    if (dataIndexOf + 1 != CommentHistoryData.length) {
      //find difference between historical comments
      let leftHandedSide = element;
      let rightHandedSide = CommentHistoryData[CommentHistoryData.indexOf(element) + 1]; //old
      let differences = dDiff.diff(leftHandedSide, rightHandedSide); // new
      differences.forEach(diff => {
        let changedKey = diff.path[0];
        if (diff.kind == "E" && changedKey != "commentId") {
          newObject[changedKey] = diff.lhs;
        }
      });
    }

    return newObject
  }







}
