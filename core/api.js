/* eslint-disable prefer-promise-reject-errors */
const Const = require('./const')
const Data = require('./data')
const Util = require('./util')

const urlencodedHeader = {
    'Content-Type': 'application/x-www-form-urlencoded'
}
const jsonHeader = {
    'Content-Type': 'application/json'
}
const ApiUrl = Const.NET.END_POINT;

function transformObjectToUrlencodedData (obj) {
  let p = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      p.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
  }

  return p.join('&')
}

function handlerError (res, reject) {
  let message = res.data.message

  uni.showModal({
    title: '',
    content: (res.data && res.data.message) || '数据获取失败',
    showCancel: false,
    success: function () {
      reject({
        code: res.data.code,
        message: res.data.message
      })
    }
  })
}

function get(api, params,isToken) {
    let url = `${ApiUrl}/${api}`;
    if (!params) {
        params = {}
    }
    if(isToken){
        params.token = Data.getToken() || '';
    }
    url = url + "?" + transformObjectToUrlencodedData(params);
    // console.log(url)
    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            method: 'GET',
            header: urlencodedHeader,
            success: response => {
                let body = response.data;
                if (response.data.hasOwnProperty('code') && response.data.code === Const.ERROR.ERROR_TOKEN_INVALID) {
                    Data.clearAuthData();
                    uni.navigateTo({url: '/pages/login/index'});
                    return;
                }
                if (body.hasOwnProperty('code') && body.code == 0) {
                    if (body.hasOwnProperty('data')) {
                        return resolve(body.data)
                    } else {
                        return resolve(true);
                    }
                } else {
                    return reject(body);
                }
            },
            fail: error => {
                console.error(error)
                return reject(error);
            }
        })
    })
}

function post(api, params,isToken) {
    let url = `${ApiUrl}/${api}`;
    if (!params) {
        params = {};
    }
    if(isToken){
        params.token = Data.getToken() || '';
    }
    console.log(url + "?" + transformObjectToUrlencodedData(params));
    return new Promise((resolve, reject) => {
        uni.showLoading({title: '加载中',mask	:true});
        uni.request({
            url: url,
            method: 'POST',
            data: params,
            header: urlencodedHeader,
            success: response => {
                let body = response.data;
                if (response.data.hasOwnProperty('code') && response.data.code === Const.ERROR.ERROR_TOKEN_INVALID) {
                    Data.clearAuthData();
                    uni.hideLoading();
                    console.log('去登陆页')
                    return;
                }
                if (body.hasOwnProperty('code') && body.code == 0) {
                    if (body.hasOwnProperty('data')) {
                        uni.hideLoading();
                        return resolve(body.data)
                    } else {
                        uni.hideLoading();
                        return resolve(true);
                    }
                } else {
                    uni.hideLoading();
                    return reject(body);
                }
            },
            fail: error => {
                uni.hideLoading();
                console.error(error)
                return reject(error);
            }
        })
    });
}

function postJson(api, params,isToken) {
    let url = `${ApiUrl}/${api}`;
    let token = Data.getToken() || '';
    if (!params) {
        params = {};
    }
    if(isToken){
        url = url + "?token=" + token;
    }
    // console.log(url + "?" + transformObjectToUrlencodedData(params));
    return new Promise((resolve, reject) => {
        uni.request({
            url: url,
            method: 'POST',
            data: params,
            headers: jsonHeader,
            success: response => {
                let body = response.data;
                if (response.data.hasOwnProperty('code') && response.data.code === Const.ERROR.ERROR_TOKEN_INVALID) {
                    Data.clearAuthData();
                    uni.navigateTo({url: '/pages/login/index'});
                    return;
                }
                if (body.hasOwnProperty('code') && body.code == 0) {
                    if (body.hasOwnProperty('data')) {
                        return resolve(body.data)
                    } else {
                        return resolve(true);
                    }
                } else {
                    return reject(body);
                }
            },
            fail: error => {
                console.error(error)
                return reject(error);
            }
        })
    });
}

api.jsonRequest = jsonRequest
api.get = get
api.post = post
api.postJson = postJson

module.exports = api
