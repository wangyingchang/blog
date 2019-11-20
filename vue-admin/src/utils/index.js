/**
 * created by wangyingchang 2019/11/10 
 * @param {*} date
 */

function date2String(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const seconds = date.getSeconds();

  return year + '-' + month + '-' + day + ' ' + hour + ':' + seconds
}


export default date2String;