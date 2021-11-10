import {
  ICommentState,
  ECommentActions,
  TCommentActions,
} from '../types/CommentTypes';

const initialState: ICommentState = {
  comments: [],
  error: null,
  isLoading: false,
};

export const commentsReducer = (
  state = initialState,
  action: TCommentActions,
) => {
  switch (action.type) {
    case ECommentActions.FETCH_COMMENTS:
      return {...state, isLoading: true};
    case ECommentActions.FETCH_COMMENTS_SUCCESS:
      return {...state, isLoading: false, comments: action.payload};
    case ECommentActions.FETCH_COMMENTS_ERROR:
      return {...state, isLoading: false, error: action.payload};
    case ECommentActions.ADD_COMMENT:
      return {...state, comments: [...state.comments, action.payload]};
    case ECommentActions.DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          comment => comment.id !== action.payload,
        ),
      };
    case ECommentActions.CHANGE_COMMENT:
      let newComments = state.comments.map(comment => {
        if (
          comment.postId === action.payload.postId &&
          comment.id === action.payload.id
        ) {
          comment = action.payload;
        }
        return comment;
      });
      return {
        ...state,
        comments: newComments,
      };
    default:
      return state;
  }
};
