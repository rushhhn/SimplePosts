import {postsReducer} from '../src/redux/reducers/postsReducer';
import {TPostActions} from '../src/redux/types/PostTypes';
import {EPostAction} from '../src/redux/types/PostTypes';

let posts = [
  {
    id: 1,
    title: 'First post',
    body: 'This is the first post',
  },
  {
    id: 2,
    title: 'Second post',
    body: 'This is the second post',
  },
];

let state = {
  posts,
  error: null,
  isLoading: true,
};

test('Fetching posts from server', () => {
  let action = {
    type: EPostAction.FETCH_POSTS,
  } as TPostActions;

  let newState = postsReducer(state, action);
  expect(newState.posts.length).toBe(0);
  expect(newState.isLoading).toBe(true);
});

test('Posts successfully fetched from server', () => {
  let action = {
    type: EPostAction.FETCH_POSTS_SUCCESS,
    payload: posts,
  } as TPostActions;

  let newState = postsReducer(state, action);
  expect(newState.posts.length).toBe(2);
  expect(newState.posts[0].title).toBe('First post');
  expect(newState.isLoading).toBe(false);
});

test('Error fetching posts from server', () => {
  let action = {
    type: EPostAction.FETCH_POSTS_ERROR,
    payload: 'Error occured. Failed to fetch posts from server.',
  } as TPostActions;

  let newState = postsReducer(state, action);
  expect(newState.posts.length).toBe(0);
  expect(newState.error).toBe(
    'Error occured. Failed to fetch posts from server.',
  );
  expect(newState.isLoading).toBe(false);
});

test('Adding new post', () => {
  let action = {
    type: EPostAction.ADD_POST,
    payload: {
      id: 3,
      title: 'Third post',
      body: 'This is the third post',
    },
  } as TPostActions;

  let newState = postsReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

test('Deleting post', () => {
  let action = {
    type: 'DELETE_POST',
    payload: 1,
  };

  let newState = postsReducer(state, action as TPostActions);
  expect(newState.posts.length).toBe(1);
});

test('Changing post', () => {
  let action = {
    type: EPostAction.CHANGE_POST,
    payload: {
      id: 2,
      title: 'Changed post',
      body: 'This post has been edited',
    },
  };

  let newState = postsReducer(state, action as TPostActions);
  expect(newState.posts[1].title).toBe('Changed post');
});

test('Default', () => {
  let action: any = {
    type: null,
  };

  let newState = postsReducer(state, action);
  expect(newState).toBe(state);
});
