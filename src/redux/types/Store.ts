import {IPost} from './PostTypes';
import {IComment} from './CommentTypes';

export interface IState {
  posts: IPost[];
  comments: IComment[];
  isLoading: boolean;
  isLoadingComments: boolean;
  error: null | string;
  errorComments: null | string;
}
