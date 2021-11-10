export interface IComment {
  postId: number;
  id: number;
  text: string;
}

export interface ICommentState {
  comments: IComment[];
  error: string | null;
  isLoading: boolean;
}

export enum ECommentActions {
  FETCH_COMMENTS = 'FETCH_COMMENTS',
  FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS',
  FETCH_COMMENTS_ERROR = 'FETCH_COMMENTS_ERROR',
  ADD_COMMENT = 'ADD_COMMENT',
  DELETE_COMMENT = 'DELETE_COMMENT',
  CHANGE_COMMENT = 'CHANGE_COMMENT',
}

interface IFetchCommentAction {
  type: ECommentActions.FETCH_COMMENTS;
}

interface IFetchCommentsSuccessAction {
  type: ECommentActions.FETCH_COMMENTS_SUCCESS;
  payload: IComment[];
}

interface IFetchCommentsErrorAction {
  type: ECommentActions.FETCH_COMMENTS_ERROR;
  payload: string;
}

interface IAddCommentAction {
  type: ECommentActions.ADD_COMMENT;
  payload: IComment;
}

interface IDeleteCommentAction {
  type: ECommentActions.DELETE_COMMENT;
  payload: number;
}

interface IChangeCommentAction {
  type: ECommentActions.CHANGE_COMMENT;
  payload: IComment;
}

export type TCommentActions =
  | IFetchCommentAction
  | IFetchCommentsSuccessAction
  | IFetchCommentsErrorAction
  | IAddCommentAction
  | IDeleteCommentAction
  | IChangeCommentAction;
