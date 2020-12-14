const Const = require('./const')

let Data = {
    getToken: getToken,
    setToken: setToken,
    setOpenId: setOpenId,
    getOpenId: getOpenId,
    get: get,
    set: set,
    remove: remove,
    clear: clear
}

function getKey(key) {
    return Const.DATA.KEY_PREFIX + key
}

function get(key) {
    key = getKey(key)
    return wx.getStorageSync(key)
}

function set(key, val) {
    key = getKey(key)
    wx.setStorageSync(key, val)
}

function remove(key) {
    key = getKey(key)
    wx.removeStorageSync(key)
}

function clear() {
    wx.clearStorageSync()
}

function getToken() {
    let key = Const.DATA.KEY_TOKEN
    return get(key)
}

function setToken(token) {
    let key = Const.DATA.KEY_TOKEN
    return set(key, token)
}

function setOpenId(openId) {
    let key = Const.DATA.KEY_OPENID
    return set(key, openId)
}

function getOpenId() {
    let key = Const.DATA.KEY_OPENID
    return get(key)
}

module.exports = Data
