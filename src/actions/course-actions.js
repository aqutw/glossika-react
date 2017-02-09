import { CHANGE_COURSE_LANGUAGE, FETCH_COURSES_ACTION } from './types';
import axios from 'axios';

export function changeCourseLanguageAction(change2Lang) {
  console.log('changeCourseLanguageAction', change2Lang)
  return {
    type: CHANGE_COURSE_LANGUAGE,
    curLang: change2Lang
  };
}

export function fetchCoursesAction(curLang) {
  console.log('fetchCoursesAction', curLang);
  const request = axios.get('/json/courses.json');
  return {
    type: FETCH_COURSES_ACTION,
    courseCurLang: curLang,
    promisePayload: request
  };
}