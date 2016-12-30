import { connect } from 'react-redux'
import {NOTIFICATION_CLOSE, NOTIFICATION_CLOSE_ALL} from '../actions'
import {getNotifications} from '../selectors/notifications'

import Notifications from '../components/Notifications'

const mapStateToProps = state => {
  const notifications = getNotifications(state)

  return {
    notifications
  }
}

const mapDispatchToProps = dispatch => ({
  closeNotification: notificationId => dispatch({type: NOTIFICATION_CLOSE, payload: {notificationId}}),
  closeAllNotifications: () => dispatch({type: NOTIFICATION_CLOSE_ALL})
})

export default connect(mapStateToProps, mapDispatchToProps)(Notifications)
