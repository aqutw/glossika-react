export default function({dispatch}) {
  return next => action => {
    console.log('Test1');
    return next(action);
  };
}