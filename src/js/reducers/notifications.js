import {NOTIFICATION_ADD, NOTIFICATION_CLOSE, NOTIFICATION_CLOSE_ALL} from '../actions'

const initialState = {authentified: false, status: ''}

export default function layer (state = initialState, {type}) {
  switch (type) {
    case GOOGLE_AUTH:
      return {
        ...state,
        status: 'pending'
      }
    case GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        authentified: true,
        status: ''
      }
    case GOOGLE_AUTH_FAILED:
      return {
        ...state,
        authentified: false,
        status: 'error'
      }
    default:
      return state
  }
}
