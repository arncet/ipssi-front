import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILED } from '../actions'

export default function layer (state = { user: null, error: null }, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user
      }
    case USER_LOGIN_FAILED:
      return {
        ...state,
        error: action.payload.error
      }
    default:
      return state
  }
}
