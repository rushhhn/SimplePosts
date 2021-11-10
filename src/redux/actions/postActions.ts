import {Dispatch} from 'redux';
import {EPostAction, TPostActions} from '../types/PostTypes';
import {IPost} from '../types/PostTypes';

export const fetchPosts = () => {
  return async (dispatch: Dispatch<TPostActions>) => {
    try {
      dispatch({type: EPostAction.FETCH_POSTS});
      const response = await fetch(
        'https://my-json-server.typicode.com/rushhhn/SimplePosts/posts',
      );
      const newPosts = await response.json();
      dispatch({type: EPostAction.FETCH_POSTS_SUCCESS, payload: newPosts});
    } catch (e) {
      dispatch({
        type: EPostAction.FETCH_POSTS_ERROR,
        payload: 'Error occured. Failed to fetch posts from server.',
      });
    }
  };
};

export const addPost = (newPost: IPost) => {
  return async (dispatch: Dispatch<TPostActions>) => {
    try {
      dispatch({type: EPostAction.ADD_POST, payload: newPost});
    } catch (e) {
      dispatch({
        type: EPostAction.FETCH_POSTS_ERROR,
        payload: 'Error occured. Failed to add the new post.',
      });
    }
  };
};

export const deletePost = (id: number) => {
  return async (dispatch: Dispatch<TPostActions>) => {
    try {
      dispatch({type: EPostAction.DELETE_POST, payload: id});
    } catch (e) {
      console.log('Error occured. Failed to delete the post.');
    }
  };
};

export const changePost = (payload: IPost) => {
  return async (dispatch: Dispatch<TPostActions>) => {
    dispatch({type: EPostAction.CHANGE_POST, payload});
  };
};
