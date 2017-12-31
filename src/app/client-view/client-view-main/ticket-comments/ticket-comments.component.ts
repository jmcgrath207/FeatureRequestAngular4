import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Params} from "@angular/router";
import {FeatureState} from "../../store/client-view.reducers";
import {selectCommentHistoryTable, selectCommentTable} from "../../store/client-view.selector";
import {FetchCommentHistoryTable, FetchCommentsTable} from "../../store/client-view.actions";
import "rxjs/add/operator/takeWhile";
import {CommentsTableModel} from "./comments-table.model";
import {default as dDiff} from 'deep-diff'



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
          let newCommentHistoryData;
          if (Object.keys(CommentHistoryData[0]).length !== 0) {

            newCommentHistoryData = this.commentdiffinverse(CommentHistoryData,index);


            this.newCommentHistoryObject[index] = {
              'CommentHistory' : newCommentHistoryData,
              'CommentHistoryLength': newCommentHistoryData.length
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




  private commentdiffinverse(CommentHistoryData: CommentsTableModel[],  index: number) {
    // Gather the incremental differences between comments and displays from lastest to first


    let commmentNumber = CommentHistoryData.length -1;
    let newCommentHistoryData = [];


    CommentHistoryData.forEach(element => {
      let newCommentHistoryObject = {};

      // if orignal commment ignore
    if (CommentHistoryData.indexOf(element) + 1 != CommentHistoryData.length) {
      //find difference between historical comments
    try {
      let leftHandedSide = element; // old
      let rightHandedSide = CommentHistoryData[CommentHistoryData.indexOf(element) - 1]; // new
      let differences = dDiff.diff(leftHandedSide, rightHandedSide);
      differences.forEach(diff => {
        let changedKey = diff.path[0];
        if (diff.kind == "E" && changedKey != "commentId") {
          newCommentHistoryObject[changedKey] = diff.lhs;
        }
      });
    }
    catch (e) {
      //find difference between last historical comments and Present Comment
      let leftHandedSide = element; // old
      let rightHandedSide = this.newCommentTable[index]; // new
      let differences = dDiff.diff(leftHandedSide, rightHandedSide);
      differences.forEach(diff => {
        let changedKey = diff.path[0];
        if (diff.kind == "E" && changedKey != "commentId") {
          newCommentHistoryObject[changedKey] = diff.lhs;
        }
      });
    }
    }

      if (Object.keys(newCommentHistoryObject).length !== 0) {
        newCommentHistoryObject["updateUser"] = element["updateUser"];
        newCommentHistoryObject["updateDate"] = element["updateDate"];
        newCommentHistoryObject["commentNumber"] = commmentNumber;
        newCommentHistoryData.push(newCommentHistoryObject);
        commmentNumber = commmentNumber - 1;
      }




  });

  return newCommentHistoryData;
  }






}
