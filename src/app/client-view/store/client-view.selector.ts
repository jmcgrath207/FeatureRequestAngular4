




import {FeatureState} from "./client-view.reducers";


//  FOR src/app/client-view/client-view-main/ticket-comments/ticket-comments.component.ts




/*
export function checkForEmptyState(data: FeatureState) {

  const check = false;

  if (Object.keys(data[0]).length !== 0) {
    const check = true;
  }
  else {
    const check = false;
  }

  return check;
}
*/


export const selectCommentTable = (state:FeatureState) => state.clientview.commentsTable;


