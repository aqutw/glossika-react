import { CHANGE_COURSE_LANGUAGE } from './types';

export function changeCourseLanguageAction(change2Lang) {
  console.log('changeCourseLanguageAction', change2Lang)
  return {
    type: CHANGE_COURSE_LANGUAGE,
    curLang: change2Lang
  };
}
