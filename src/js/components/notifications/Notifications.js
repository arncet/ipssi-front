import React from 'react'
import Notification from './Notification'

const Notifications = ({notifications, closeNotification, closeAllNotifications}) => {
  if (!notifications.length) return <noscript/>
  return (
    <div className='Notifications_wrapper'>
      {
        notifications.length > 1
          ? <div
              className='Notifications_close_all'
              onClick={() => closeAllNotifications()}
              style={{bottom: `${notifications.length * 40 + 20}px`}}
            >
              <span className='fa fa-times'/>
              Tous fermer
            </div>
          : null
      }
      <div className='Notifications'>
        {notifications.map((notification, i) => <Notification key={i} index={i} notification={notification} closeNotification={closeNotification}/>)}
      </div>
    </div>
  )
}

export default Notifications
