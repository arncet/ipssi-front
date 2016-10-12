//User
export const USER_LOGIN = 'USER_LOGIN'
export const userLogin = payload => ({ type: USER_LOGIN, payload: payload })

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const userLoginSuccess = payload => ({ type: USER_LOGIN_SUCCESS, payload: payload })

export const USER_LOGIN_FAILED = 'USER_LOGIN_FAILED'
export const userLoginFailed = payload => ({ type: USER_LOGIN_FAILED, payload: payload })
