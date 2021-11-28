import {TPostActions, EPostAction} from '../types/PostTypes';
import {IPostState} from '../types/PostTypes';

const initialState: IPostState = {
  posts: [],
  isLoading: true,
  error: null,
};

export const postsReducer = (
  state: IPostState = initialState,
  action: TPostActions,
): IPostState => {
  switch (action.type) {
    case EPostAction.FETCH_POSTS:
      return {isLoading: true, error: null, posts: []};
    case EPostAction.FETCH_POSTS_SUCCESS:
      return {isLoading: false, error: null, posts: action.payload};
    case EPostAction.FETCH_POSTS_ERROR:
      return {isLoading: false, error: action.payload, posts: []};
    case EPostAction.ADD_POST:
      return {...state, posts: [...state.posts, action.payload]};
    case EPostAction.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload),
      };
    case EPostAction.CHANGE_POST:
      let newPosts = state.posts.map(post =>
        post.id === action.payload.id ? action.payload : post,
      );
      return {
        ...state,
        posts: newPosts,
      };
    default:
      return state;
  }
};
