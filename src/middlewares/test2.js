export default function({dispatch}) {
  return next => action => {
    console.log('Test2');
    return next(action);
  };
}