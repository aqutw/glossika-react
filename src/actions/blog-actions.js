import { FETCH_POSTS } from './types';
import axios from 'axios';

export function fetchPosts() {
  const request = axios.get('/json/blog-posts.json');
  return {
    type: FETCH_POSTS,
    promisePayload: request
  };
}