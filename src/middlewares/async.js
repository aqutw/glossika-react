export default function({dispatch}) {
  return next => action => {
    console.log(action);
    const isNotWhatThisMiddlewareCare = !action.promisePayload || !action.promisePayload.then;
    if (isNotWhatThisMiddlewareCare) {
      return next(action);
    }

    action.promisePayload.then(res => {
      const newAction = { ...action, promisePayload: res }
      dispatch(newAction);
    });
  };
}