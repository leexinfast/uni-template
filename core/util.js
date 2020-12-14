/* eslint-disable camelcase */
const Const = require('./const')

let Util = {
  go: go,
  goRedirect: goRedirect,
  reLaunchGo: reLaunchGo,
  goBack: goBack,
  switchTab: switchTab,
  showSuccessToast: showSuccessToast,
  inArray: inArray,
  time: time,
  getMonday: getMonday,
  timeFormat: timeFormat,
  friendlyTime: friendlyTime,
  getTodayBegin: getTodayBegin,
  getTodayEnd: getTodayEnd,
  getDiffDate: getDiffDate,
  difference: difference,
  isEmail: isEmail,
  isPhone: isPhone,
  isNum: isNum,
  getImgUrl: getImgUrl,
  getItemImg: getItemImg,
  getImgUrlList: getImgUrlList,
  getDefaultItemImg: getDefaultItemImg,
  setNavigationBarTitle: setNavigationBarTitle,
  showTip: showTip,
  getUserAvatarUrl: getUserAvatarUrl,
  getUploadImgUrl: getUploadImgUrl,
  displayUserName: displayUserName,
  calculateDuration: calculateDuration,
  getVoiceUrl: getVoiceUrl,
  stringTruncate: stringTruncate,
  get: get,
  isHttp: isHttp,
  isHttpNotWX: isHttpNotWX,
  transformObjectToUrlencodedData: transformObjectToUrlencodedData,
  haveHttp: haveHttp,
  processMoney: processMoney,
  array_to_dyadic_array: array_to_dyadic_array,
  dateAgo: dateAgo,

  getTimeText: getTimeText,
  startWith: startWith,
  getNoHtmlText: getNoHtmlText
}

function getNoHtmlText (str, max) {
  let s = str.replace(/<script[^>]*?>.*?<\/script>/g, '')
    .replace(/<(.[^>]*)/g, '')
    .replace(/([\r\n])[\s]+/g, '')
    .replace(/-->/g, '')
    .replace(/&(quot|#34);/g, '')
    .replace(/&(amp|#38);/g, '')
    .replace(/&(lt|#60);/g, '')
    .replace(/&(gt|#62);/g, '')
    .replace(/&(nbsp|#160);/g, '')
    .replace(/&(iexcl|#161);/g, '')
    .replace(/&(cent|#162);/g, '')
    .replace(/&(pound|#163);/g, '')
    .replace(/&(copy|#169);/g, '')
    .replace(/&#(\d+);/g, '')
    .replace(/</g,"")
    .replace(/>/g,"")
    .replace("\r\n","")
  if (s && s.length > max) {
    return s.substring(0, max)
  }
  return s
}

function array_to_dyadic_array (data, subArrayNum) {
  let dataArr = new Array(Math.ceil(data.length / subArrayNum))
  for (let i = 0; i < dataArr.length; i++) {
    dataArr[i] = new Array()
    for (let j = 0; j < subArrayNum; j++) {
      dataArr[i][j] = ''
    }
  }
  for (let i = 0; i < data.length; i++) {
    dataArr[parseInt(i / subArrayNum)][i % subArrayNum] = data[i]
  }
  return dataArr
}

function friendlyTime (value) {
  var currentTime = Util.time()
  var diffTime = currentTime - value

  if (diffTime < 60) {
    return '刚刚'
  }

  if (diffTime < 3600) {
    var time = parseInt(diffTime / 60)
    return `${time} 分钟`
  }

  if (diffTime < 3600 * 24) {
    var time = parseInt(diffTime / 3600)
    return `${time} 小时前`
  }

  if (diffTime < 3600 * 24 * 3) {
    var time = parseInt(diffTime / 3600 / 24)
    return `${time} 天前`
  }

  return timeFormat(value)
}

function getTimeText (date) {
  // let now = parseInt(new Date().getTime() / 1000, 10);
  // let time = parseInt(new Date(date).getTime() / 1000, 10);
  // let nowGps = new Date();
  // let nowDay = nowGps.getDate();
  //
  // let mondayDate = getMonday(new Date());
  // let mondayTime = parseInt(new Date(mondayDate).getTime() / 1000, 10);
  //
  // let dateGps = new Date(date);
  // let dateYear = dateGps.getFullYear();
  // let dateMonth = dateGps.getMonth() + 1;
  // let dateDay = dateGps.getDate();
  // let dateWeek = dateGps.getDay();
  // let dateHour = dateGps.getHours();
  // let dateMin = dateGps.getMinutes();
  //
  // let amOrPm = dateHour > 13 ? "下午" : (dateHour > 7 ? "上午" : "凌晨");
  // let hour = dateHour % 12;
  //
  // if (amOrPm == "上午" && dateHour == 12) {
  //   hour = 12;
  // }
  //
  // if (dateMin < 10) {
  //   dateMin = "0" + dateMin;
  // }
  // // 同一天
  // if (nowDay == dateDay && (now - time) < 24 * 3600) {
  //   return `${amOrPm}${hour}:${dateMin}`;
  // }
  //
  // // 小于1天
  // if (nowDay > dateDay && (now - time) < 24 * 3600) {
  //   return `昨天 ${amOrPm}${hour}:${dateMin}`;
  // }
  //
  // // 当前周
  // if (time > mondayTime) {
  //   let week = ["日", "一", "二", "三", "四", "五", "六"];
  //   return `星期${week[dateWeek]} ${amOrPm}${hour}:${dateMin}`;
  // }
  // if (dateYear) {
  //   return `${dateYear}年${dateMonth}月${dateDay}日 ${amOrPm}${hour}:${dateMin}`;
  // }
  return date

}

function getMonday (dd) {
  let week = dd.getDay() // 获取时间的星期数
  let minus = week ? week - 1 : 6
  dd.setDate(dd.getDate() - minus) // 获取minus天前的日期
  let y = dd.getFullYear()
  let m = dd.getMonth() + 1 // 获取月份
  let d = dd.getDate()
  return y + '-' + m + '-' + d
}

function transformObjectToUrlencodedData (obj) {
  let p = []
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      p.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
  }
  return p.join('&')
}

function isHttp (content) {
  if (/https:\/\/mp.weixin.qq.com\/s\/([0-9a-zA-Z-_]+)/.test(content)) {
    return true
  } else {
    return false
  }
}

function isHttpNotWX (content) {
  if (/(http|https):\/(\/[0-9a-zA-Z-_]+)+/.test(content)) {
    return true
  } else {
    return false
  }
}

function haveHttp (content) {
  if (/(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/.test(content)) {
    return true
  } else {
    return false
  }
}

function processMoney (money) {
  return (Number(money) / 100).toFixed(2)
}

function go (url) {
  wx.navigateTo({ url: url })
}

function goRedirect (url) {
  wx.redirectTo({ url: url })
}

function reLaunchGo (url) {
  wx.reLaunch({ url: url })
}

function switchTab (url) {
  wx.switchTab({ url: url })
}

function goBack (delta = 1) {
  wx.navigateBack(delta)
}

function get (obj, key) {
  return key.split('.').reduce(function (o, x) {
    return (typeof o === 'undefined' || o === null) ? o : o[x]
  }, obj)
}

function showSuccessToast (title, time, url, isGoRedirect = false) {
  wx.showToast({
    title: title,
    icon: 'success',
    duration: time,
    success: function () {
      setTimeout(function () {
        if (isGoRedirect) {
          goRedirect(url)
        } else {
          go(url)
        }
      }, time)
    }
  })
}

function inArray (needle, haystack, argStrict) {
  let key = '',
    strict = !!argStrict

  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true
      }
    }
  }

  return false
}

function time () {
  return parseInt(new Date().getTime() / 1000, 10)
}

function getTodayBegin () {
  return parseInt(new Date(new Date().setHours(0, 0, 0, 0)) / 1000)
}

function displayUserName (user, anonymous) {
  if (anonymous) {
    return '匿名'
  }

  if (!user) {
    return '匿名'
  }

  if (user.name) {
    return user.name
  }

  if (user.nickname) {
    return user.nickname
  }

  return '匿名'
}

function getTodayEnd () {
  return parseInt(new Date(new Date().setHours(23, 59, 59, 999)) / 1000)
}

function getDiffDate (timestamp1, timestamp2) {
  let date1 = new Date(timestamp1 * 1000)
  let year1 = date1.getFullYear()
  let month1 = date1.getMonth()

  let date2 = new Date(timestamp2 * 1000)
  let year2 = date2.getFullYear()
  let month2 = date2.getMonth()

  if (month2 >= month1) {
    return year2 - year1
  } else {
    return year2 - year1 - 1
  }
}

function timeFormat (timestamp, format) {
  if (!timestamp) {
    return '-'
  }

  if (!format) {
    format = 'Y-m-d H:i:s'
  }
  return _dateFormat(format, timestamp)
}

function calculateDuration (time) {
  let t = time / 1000
  let m = parseInt(t / 60) + ''
  let s = Math.round(t % 60) + ''

  function paddingWithZero (r) {
    return ('00' + r).substring(r.length)
  }

  return `${m}′:${paddingWithZero(s)}″`
}

function difference (arr1, arr2) {
  let set1 = new Set(arr1)
  let set2 = new Set(arr2)

  let differenceSet = new Set([...set1].filter(x => !set2.has(x)))
  return [...differenceSet]
}

function isEmail (email) {
  let reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
  return reg.test(email)
}

function isPhone (phone) {
  let reg = /^1[3|4|5|7|8][0-9]{9}$/
  return reg.test(phone)
}

function isNum (num) {
  let reNum = /^\d*$/
  return (reNum.test(num))
}

function getDefaultItemImg () {
  return '/static/assets/image/commodity-1.png'
}

function getItemImg (url) {
  return 'http:' + url
}

function getUserAvatarUrl (user, anonymous) {
  if (anonymous) {
    return '/static/assets/icon/default-avatar.jpg'
  }
  if (!user) {
    return '/static/assets/icon/default-avatar.jpg'
  }

  if (!user.avatar) {
    return '/static/assets/icon/default-avatar.jpg'
  }

  if (user.avatar.indexOf('http') >= 0) {
    return user.avatar
  }

  return Const.NET.IMG_URL_PREFIX + user.avatar
}

function getUploadImgUrl (data) {
  if (!data) {
    return '/static/assets/icon/icon-avatar@2x.png'
  }
  if (data.code) {
    return '/static/assets/icon/icon-avatar@2x.png'
  }
  if (data.cover) {
    return Const.NET.IMG_URL_PREFIX + data.cover
  }
  if (data.name) {
    return Const.NET.IMG_URL_PREFIX + data.name
  }
  if (data.data) {
    return Const.NET.IMG_URL_PREFIX + data.data.name
  }
}

function getVoiceUrl (data) {
  if (!data) {
    return ''
  }
  if (!data.name) {
    return ''
  }
  return Const.NET.FILE_URL_PREFIX + data.name
}

function getImgUrl (img) {
  if (img && img.indexOf('http') >= 0) {
    return img
  }
  if (!img) {
    return '/static/assets/icon/icon-avatar@2x.png'
  }
  return Const.NET.IMG_URL_PREFIX + img
}

function getImgUrlList (imgList) {
  if (!imgList.length) {
    return []
  }

  let resultList = []

  imgList.forEach(lt => {
    resultList.push(Const.NET.IMG_URL_PREFIX + lt)
  })
  return resultList
}

function setNavigationBarTitle (title) {
  wx.setNavigationBarTitle({
    title: 'title'
  })
}

// 显示内容弹窗，无回调事件
function showTip (title, message) {
  wx.showModal({
    title: title,
    content: message,
    showCancel: false,
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
}

function startWith (target, str) {
  let reg = new RegExp('^' + str)
  return reg.test(target)
}

function stringTruncate (str, len) {
  var temp
  var icount = 0
  var patrn = /[^\x00-\xff]/
  var strre = ''
  var leng = str.length
  for (var i = 0; i < leng; i++) {
    if (icount < len - 1) {
      temp = str.substr(i, 1)
      if (patrn.exec(temp) == null) {
        icount = icount + 1
      } else {
        icount = icount + 2
      }
      strre += temp
    } else {
      break
    }
  }
  if (leng < len) {
    return strre
  } else {
    return strre + '...'
  }
}

function dateAgo (yearAgo, monthAgo, dayAgo) {
  let date = new Date()
  let year = date.getFullYear() - yearAgo
  let month = date.getMonth() - monthAgo + 1
  let day = date.getDate() - dayAgo

  return parseInt(new Date(`${year}/${month}/${day}`).getTime() / 1000, 10)
}

function _dateFormat (format, timestamp) {
  var that = this
  var jsdate, f
  // Keep this here (works, but for code commented-out below for file size reasons)
  // var tal= [];
  var txt_words = [
    'Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur',
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]
  // trailing backslash -> (dropped)
  // a backslash followed by any character (including backslash) -> the character
  // empty string -> empty string
  var formatChr = /\\?(.?)/gi
  var formatChrCb = function (t, s) {
    return f[t] ? f[t]() : s
  }
  var _pad = function (n, c) {
    n = String(n)
    while (n.length < c) {
      n = '0' + n
    }
    return n
  }
  f = {
    // Day
    d: function () { // Day of month w/leading 0; 01..31
      return _pad(f.j(), 2)
    },
    D: function () { // Shorthand day name; Mon...Sun
      return f.l()
        .slice(0, 3)
    },
    j: function () { // Day of month; 1..31
      return jsdate.getDate()
    },
    l: function () { // Full day name; Monday...Sunday
      return txt_words[f.w()] + 'day'
    },
    N: function () { // ISO-8601 day of week; 1[Mon]..7[Sun]
      return f.w() || 7
    },
    S: function () { // Ordinal suffix for day of month; st, nd, rd, th
      var j = f.j()
      var i = j % 10
      if (i <= 3 && parseInt((j % 100) / 10, 10) == 1) {
        i = 0
      }
      return ['st', 'nd', 'rd'][i - 1] || 'th'
    },
    w: function () { // Day of week; 0[Sun]..6[Sat]
      return jsdate.getDay()
    },
    z: function () { // Day of year; 0..365
      var a = new Date(f.Y(), f.n() - 1, f.j())
      var b = new Date(f.Y(), 0, 1)
      return Math.round((a - b) / 864e5)
    },

    // Week
    W: function () { // ISO-8601 week number
      var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3)
      var b = new Date(a.getFullYear(), 0, 4)
      return _pad(1 + Math.round((a - b) / 864e5 / 7), 2)
    },

    // Month
    F: function () { // Full month name; January...December
      return txt_words[6 + f.n()]
    },
    m: function () { // Month w/leading 0; 01...12
      return _pad(f.n(), 2)
    },
    M: function () { // Shorthand month name; Jan...Dec
      return f.F()
        .slice(0, 3)
    },
    n: function () { // Month; 1...12
      return jsdate.getMonth() + 1
    },
    t: function () { // Days in month; 28...31
      return (new Date(f.Y(), f.n(), 0))
        .getDate()
    },

    // Year
    L: function () { // Is leap year?; 0 or 1
      var j = f.Y()
      return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0
    },
    o: function () { // ISO-8601 year
      var n = f.n()
      var W = f.W()
      var Y = f.Y()
      return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0)
    },
    Y: function () { // Full year; e.g. 1980...2010
      return jsdate.getFullYear()
    },
    y: function () { // Last two digits of year; 00...99
      return f.Y()
        .toString()
        .slice(-2)
    },

    // Time
    a: function () { // am or pm
      return jsdate.getHours() > 11 ? 'pm' : 'am'
    },
    A: function () { // AM or PM
      return f.a()
        .toUpperCase()
    },
    B: function () { // Swatch Internet time; 000..999
      var H = jsdate.getUTCHours() * 36e2
      // Hours
      var i = jsdate.getUTCMinutes() * 60
      // Minutes
      var s = jsdate.getUTCSeconds() // Seconds
      return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3)
    },
    g: function () { // 12-Hours; 1..12
      return f.G() % 12 || 12
    },
    G: function () { // 24-Hours; 0..23
      return jsdate.getHours()
    },
    h: function () { // 12-Hours w/leading 0; 01..12
      return _pad(f.g(), 2)
    },
    H: function () { // 24-Hours w/leading 0; 00..23
      return _pad(f.G(), 2)
    },
    i: function () { // Minutes w/leading 0; 00..59
      return _pad(jsdate.getMinutes(), 2)
    },
    s: function () { // Seconds w/leading 0; 00..59
      return _pad(jsdate.getSeconds(), 2)
    },
    u: function () { // Microseconds; 000000-999000
      return _pad(jsdate.getMilliseconds() * 1000, 6)
    },

    // Timezone
    e: function () { // Timezone identifier; e.g. Atlantic/Azores, ...
      // The following works, but requires inclusion of the very large
      // timezone_abbreviations_list() function.
      /*              return that.date_default_timezone_get();
       */
      throw 'Not supported (see source code of date() for timezone on how to add support)'
    },
    I: function () { // DST observed?; 0 or 1
      // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
      // If they are not equal, then DST is observed.
      var a = new Date(f.Y(), 0)
      // Jan 1
      var c = Date.UTC(f.Y(), 0)
      // Jan 1 UTC
      var b = new Date(f.Y(), 6)
      // Jul 1
      var d = Date.UTC(f.Y(), 6) // Jul 1 UTC
      return ((a - c) !== (b - d)) ? 1 : 0
    },
    O: function () { // Difference to GMT in hour format; e.g. +0200
      var tzo = jsdate.getTimezoneOffset()
      var a = Math.abs(tzo)
      return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4)
    },
    P: function () { // Difference to GMT w/colon; e.g. +02:00
      var O = f.O()
      return (O.substr(0, 3) + ':' + O.substr(3, 2))
    },
    T: function () { // Timezone abbreviation; e.g. EST, MDT, ...
      // The following works, but requires inclusion of the very
      // large timezone_abbreviations_list() function.
      /*              var abbr, i, os, _default;
       if (!tal.length) {
       tal = that.timezone_abbreviations_list();
       }
       if (that.php_js && that.php_js.default_timezone) {
       _default = that.php_js.default_timezone;
       for (abbr in tal) {
       for (i = 0; i < tal[abbr].length; i++) {
       if (tal[abbr][i].timezone_id === _default) {
       return abbr.toUpperCase();
       }
       }
       }
       }
       for (abbr in tal) {
       for (i = 0; i < tal[abbr].length; i++) {
       os = -jsdate.getTimezoneOffset() * 60;
       if (tal[abbr][i].offset === os) {
       return abbr.toUpperCase();
       }
       }
       }
       */
      return 'UTC'
    },
    Z: function () { // Timezone offset in seconds (-43200...50400)
      return -jsdate.getTimezoneOffset() * 60
    },

    // Full Date/Time
    c: function () { // ISO-8601 date.
      return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb)
    },
    r: function () { // RFC 2822
      return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb)
    },
    U: function () { // Seconds since UNIX epoch
      return jsdate / 1000 | 0
    }
  }
  var date = function (format, timestamp) {
    that = this
    jsdate = (timestamp === undefined ? new Date() // Not provided
        : (timestamp instanceof Date) ? new Date(timestamp) // JS Date()
          : new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
    )
    return format.replace(formatChr, formatChrCb)
  }

  return date(format, timestamp)
}

module.exports = Util
