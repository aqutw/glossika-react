import { showLoading, hideLoading } from 'react-redux-loading-bar'

export default function({dispatch}) {
  return next => action => {
    console.log(action);
    const isNotWhatThisMiddlewareCare = !action.promisePayload || !action.promisePayload.then;
    if (isNotWhatThisMiddlewareCare) {
      return next(action);
    }

    dispatch(showLoading())
    action.promisePayload.then(res => {
      const newAction = { ...action, promisePayload: res }

      if (action.courseCurLang && action.courseCurLang.indexOf('Select a Lang')===-1) { // course list only
        res.data = res.data.filter(item => {
          return item.title.indexOf(action.courseCurLang)>=0;
        });
      }
      dispatch(newAction);
      setTimeout(()=>{
        dispatch(hideLoading());
      }, 700)
    });
  };
}