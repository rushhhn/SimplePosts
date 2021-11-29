import {
  fetchPosts,
  addPost,
  deletePost,
  changePost,
} from '../src/redux/actions/postActions';
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

let post = {
  id: 1,
  title: 'title',
  body: 'body',
};

global.fetch = jest.fn(() =>
  Promise.resolve({json: () => Promise.resolve(posts)}),
) as jest.Mock;
let dispatch = jest.fn();

afterEach(() => dispatch.mockClear());

test('Fetching posts', async () => {
  let thunk = fetchPosts();
  await thunk(dispatch);
  expect(fetch).toBeCalledTimes(1);
  expect(fetch).toBeCalledWith(
    'https://my-json-server.typicode.com/rushhhn/SimplePosts/posts',
  );
  expect(dispatch).toBeCalledTimes(2);
  expect(dispatch).toHaveBeenNthCalledWith(1, {type: 'FETCH_POSTS'});
  expect(dispatch).toHaveBeenNthCalledWith(2, {
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts,
  });
  expect(dispatch).not.toBeCalledWith({
    type: 'FETCH_POSTS_ERROR',
    payload: 'Error occured. Failed to fetch posts from server.',
  });
});

test('Adding post', async () => {
  let thunk = addPost(post);
  await thunk(dispatch);

  expect(dispatch).toBeCalledTimes(1);
  expect(dispatch).toHaveBeenCalledWith({
    type: EPostAction.ADD_POST,
    payload: post,
  });
  expect(dispatch).not.toHaveBeenCalledWith({
    type: EPostAction.FETCH_POSTS_ERROR,
    payload: 'Error occured. Failed to add the new post.',
  });
});

test('Deleting post', async () => {
  let thunk = deletePost(1);
  await thunk(dispatch);

  expect(dispatch).toBeCalledTimes(1);
  expect(dispatch).toHaveBeenCalledWith({
    type: EPostAction.DELETE_POST,
    payload: 1,
  });
});

test('Changing post', async () => {
  let thunk = changePost(post);
  await thunk(dispatch);

  expect(dispatch).toBeCalledTimes(1);
  expect(dispatch).toHaveBeenCalledWith({
    type: EPostAction.CHANGE_POST,
    payload: post,
  });
});
