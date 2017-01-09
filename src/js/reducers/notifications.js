import {NOTIFICATION_ADD, NOTIFICATION_CLOSE, NOTIFICATION_CLOSE_ALL} from '../actions'

export default function notifications (state = {notifications: {}}, {type, payload}) {
  switch (type) {
    case NOTIFICATION_ADD:
      return {
        ...state,
        notifications:{
          ...state.notifications,
          [payload.notification.id]: payload.notification
        }
      }
    case NOTIFICATION_CLOSE: {
      const notifications = Object.values(state.notifications).reduce((prev, notification) => {
        return notification.id === payload.notificationId ? {...prev} : {...prev, [notification.id]: notification}
      }, {})
      return {
        ...state,
        notifications
      }
    }
    case NOTIFICATION_CLOSE_ALL:
      return {
        ...state,
        notifications: {}
      }
    default:
      return state
  }
}
