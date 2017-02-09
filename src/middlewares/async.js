export default function({dispatch}) {
  return next => action => {
    console.log(action);
    const isNotWhatThisMiddlewareCare = !action.promisePayload || !action.promisePayload.then;
    if (isNotWhatThisMiddlewareCare) {
      return next(action);
    }

    action.promisePayload.then(res => {
      const newAction = { ...action, promisePayload: res }

      if (action.courseCurLang) { // course list only
        res.data = res.data.filter(item => {
          return item.title.indexOf(action.courseCurLang)>=0;
        });
      }

      dispatch(newAction);
    });
  };
}