import {Dispatch} from 'redux';
import {
  ECommentActions,
  IComment,
  TCommentActions,
} from '../types/CommentTypes';

export const fetchComments = () => {
  return async (dispatch: Dispatch<TCommentActions>) => {
    try {
      dispatch({type: ECommentActions.FETCH_COMMENTS});
      const response = await fetch(
        'https://my-json-server.typicode.com/rushhhn/SimplePosts/comments',
      );
      const json = await response.json();
      dispatch({type: ECommentActions.FETCH_COMMENTS_SUCCESS, payload: json});
    } catch (e) {
      dispatch({
        type: ECommentActions.FETCH_COMMENTS_ERROR,
        payload: 'Error occured. Failed to fetch comments.',
      });
    }
  };
};

export const addComment = (newComment: IComment) => {
  return async (dispatch: Dispatch<TCommentActions>) => {
    try {
      dispatch({type: ECommentActions.ADD_COMMENT, payload: newComment});
    } catch (e) {
      console.log('Error occured. Failed to add the new comment.');
    }
  };
};

export const deleteComment = (commentId: number) => {
  return async (dispatch: Dispatch<TCommentActions>) => {
    try {
      dispatch({type: ECommentActions.DELETE_COMMENT, payload: commentId});
    } catch (e) {
      console.log('Error occured. Failed to delete the comment.');
    }
  };
};

export const changeComment = (comment: IComment) => {
  return async (dispatch: Dispatch<TCommentActions>) => {
    try {
      dispatch({type: ECommentActions.CHANGE_COMMENT, payload: comment});
    } catch (e) {
      console.log('Error occurred. Failed to change the comment.');
    }
  };
};
