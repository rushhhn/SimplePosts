export interface IPost {
  id: number;
  title: string;
  body: string;
}

export interface IPostState {
  posts: IPost[];
  error: string | null;
  isLoading: boolean;
}

export enum EPostAction {
  FETCH_POSTS = 'FETCH_POSTS',
  FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
  ADD_POST = 'ADD_POST',
  DELETE_POST = 'DELETE_POST',
  CHANGE_POST = 'CHANGE_POST',
}

interface IFetchPostsAction {
  type: EPostAction.FETCH_POSTS;
}

interface IFetchPostsSuccessAction {
  type: EPostAction.FETCH_POSTS_SUCCESS;
  payload: any[];
}

interface IFetchPostsErrorAction {
  type: EPostAction.FETCH_POSTS_ERROR;
  payload: string;
}

interface IAddPostAction {
  type: EPostAction.ADD_POST;
  payload: IPost;
}

interface IDeletePostAction {
  type: EPostAction.DELETE_POST;
  payload: number;
}

interface IChangePostAction {
  type: EPostAction.CHANGE_POST;
  payload: IPost;
}

export type TPostActions =
  | IFetchPostsAction
  | IFetchPostsSuccessAction
  | IFetchPostsErrorAction
  | IAddPostAction
  | IDeletePostAction
  | IChangePostAction;
