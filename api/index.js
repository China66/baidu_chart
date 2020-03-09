//数据请求接口
import config from '../config';
let cdnPath = config.api_path;
export function fetch(url, params,methodType) {
  return new Promise((resolve, reject) => {
    swan.request({
      url: url,
      data: params,
      method: methodType,
      dataType: 'json',
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      success: res => {
        if (res.statusCode == 200) resolve(res.data);else typeof reject === 'function' && reject(res);
      },
      error: err => {
        typeof reject === 'function' && reject(err);
      }
    });
  });
}
//请求接口
export default {
  /* ===== 测试用接口 ======= */
  getrenovation(params) {
    return fetch(`${cdnPath}/Activity/Renovation/index`, params,'GET');
  },
  submitInfo(params){
    return fetch(`${cdnPath}/Activity/Wxtenthousand/commitTheEnrolment`,params,'POST');
  },
  setTheYuyue(params){
    return fetch(`${cdnPath}/Activity/Product/setTheYuyue.html`,params,'POST');
  },
  getDateil(params){
    return fetch(`${cdnPath}/Activity/Renovation/dateil`,params,'GET');
  }
  
};