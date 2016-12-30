import React from 'react'
import Notification from './Notification'

const Notifications = ({notifications}) => {
  <div className='Notifications'>
    {notifications.map((notification, i) => <Notification key={i} notification={notification}/>)}
  </div>
}

export default Notifications
