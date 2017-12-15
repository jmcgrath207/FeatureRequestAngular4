

import {Action} from "@ngrx/store";
import {TicketTableModel} from "../client-view-main/ticket-table/ticket-table.model";
import {CommentsTableModel} from "../client-view-main/ticket-comments/comments-table.model"


export const FETCH_TICKET_TABLE =  'FETCH_TICKET_TABLE';
export const SET_TICKET_TABLE =  'SET_TICKET_TABLE';
export const FETCH_COMMENTS_TABLE =  'FETCH_COMMENTS_TABLE';
export const SET_COMMENTS_TABLE =  'SET_COMMENTS_TABLE';
export const SET_COMMENT_HISTORY_TABLE =  'SET_COMMENT_HISTORY_TABLE';
export const FETCH_COMMENT_HISTORY_TABLE =  'FETCH_COMMENT_HISTORY_TABLE';

export class SetTicketTable implements Action {
  readonly type = SET_TICKET_TABLE;

  constructor(public ticketTable: TicketTableModel[]) {}
}

export class FetchTicketTable implements Action {
  readonly type = FETCH_TICKET_TABLE;
}

export class SetCommentsTable implements Action {
  readonly type = SET_COMMENTS_TABLE;

  constructor(public commentsTable: CommentsTableModel[]) {}
}

export class FetchCommentsTable implements Action {
  readonly type = FETCH_COMMENTS_TABLE;

  constructor(public ticketOriginalId: number) {}
}

export class SetCommentHistoryTable implements Action {
  readonly type = SET_COMMENT_HISTORY_TABLE;

  constructor(public commentsHistoryTable: CommentsTableModel[]) {}
}

export class FetchCommentHistoryTable implements Action {
  readonly type = FETCH_COMMENT_HISTORY_TABLE;

  constructor(public commentOriginalId: number) {}
}


export type ClientViewActions = FetchTicketTable | SetTicketTable
  | FetchCommentsTable | SetCommentsTable | SetCommentHistoryTable | FetchCommentHistoryTable ;
