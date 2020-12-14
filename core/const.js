let Const = {
  ERROR: {
    ERROR_NETWORK: -10000,
    ERROR_INVALID: -1,
    ERROR_PARAM_NOT_SET: 1,
    ERROR_TOKEN_INVALID: 2,
    ERROR_LOGIN_FAIL: 3,
    ERROR_WRONG_PARAM: 4,
    ERROR_NOT_EXIST: 5,
    ERROR_EXIST: 6,
    ERROR_ORG_NOT_EXIST: 7,
    ERROR_ORG_MEMBER_NOT_EXISTS: 8,
    ERROR_REGISTER: 9,
    ERROR_USER_NOT_EXISTS: 10,
    ERROR_PHONE_HAS_BEEN_TAKEN: 11,
    ERROR_BIND_USER_BIND_EXISTS: 12,
    ERROR_WRONG_TYPE: 13,
    ERROR_SAVE_ERROR: 14,
    ERROR_ACTION_NOT_ALLOWED: 15,
    ERROR_WRONG_VERIFICATION_CODE: 16,
    ERROR_SEND_PHONE_VCODE_TOO_OFTEN: 17
  },

  NET: {
    END_POINT: "https://api.ticket.chengecloud.com/client/1",
    IMG_URL_PREFIX: "https://carpaint.oss-cn-hangzhou.aliyuncs.com/",
    FILE_URL_PREFIX: "https://static.innotick.com/smartwork/file/",
    // FILE_UPLOAD_END_POINT: "http://10.0.0.54:8083/file/file-upload"

  },

  DATA: {
    KEY_PREFIX: "ticket.mp.data.",
    KEY_TOKEN: "token",
    KEY_OPENID: "openid",
    KEY_USER: "user",
    KEY_WX_USER: "wx_user",
    KEY_USER_TYPE: "user-type",
    KEY_PROJECT: "project",
    KEY_AUTH: "is_auth"
  },

  PAGE: {
    LIMIT: 20
  }
};

module.exports = Const;
