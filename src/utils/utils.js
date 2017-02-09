export const strStyle2hashStyle = (str) => { // deprecated , please use http://github.com/aqutw/py-gen-nodejs-code/html-style-to-react-style/
  const a = str.split(';');
  const ret = {};
  for (let v of a) {
    let tmp = v.split(':');
    ret[tmp[0].trim()] = tmp[1].trim();
  }
  return ret;
}