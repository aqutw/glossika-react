import { FETCH_POSTS, FETCH_POST_BY_TITLE } from './types';
import axios from 'axios';

export function fetchPosts() {
  const request = axios.get('/json/blog-posts.json');
  return {
    type: FETCH_POSTS,
    promisePayload: request
  };
}

export function fetchPostByTitle(title) {
  const request = axios.get('/json/blog-post.json');
  return {
    type: FETCH_POST_BY_TITLE,
    promisePayload: request
  };
}