import React, {Component} from 'react'
import {Timer} from '../../utils/time'

class Notification extends Component{
  render() {
    const {notification: {id, message, status, autoClosingDelay}, closeNotification, index} = this.props

    return (
      <div
        className={getNotificationClassName(status)}
        style={{bottom: `${index * 40 + 20}px`}}
        onMouseEnter={() => {
          if(autoClosingDelay) this.timer.pause()
        }}
        onMouseLeave={() => {
          if(autoClosingDelay) this.timer.resume()
        }}
      >
        <div className='fa fa-times' onClick={() => closeNotification(id)}/>
        <div className='Notification_message' dangerouslySetInnerHTML={{__html: message}}/>
      </div>
    )
  }

  componentDidMount() {
    const {closeNotification, notification: {id, autoClosingDelay}} = this.props
    if (autoClosingDelay) this.timer = new Timer(() => closeNotification(id), autoClosingDelay)
  }
}

const getNotificationClassName = status => {
  switch (status) {
    case 'success':
      return 'Notification Notification_success'
    case 'error':
      return 'Notification Notification_error'
    default:
      return 'Notification'
  }
}

export default Notification
