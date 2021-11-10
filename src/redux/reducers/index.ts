import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer';
import {commentsReducer} from './commentsReducer';

export const rootReducer = combineReducers({
  postsReducer,
  commentsReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
