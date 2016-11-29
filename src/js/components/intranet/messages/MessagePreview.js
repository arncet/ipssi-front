import React, {Component} from 'react'
import moment from '../../../utils/moment'
import {getHeader, getBody} from '../../../utils/email'
import {capitalize} from 'lodash'

class MessagePreview extends Component{

  render() {
    const {messages} = this.props
    return (
      <div className='Message_preview'>
        {messages.map((message, i) => <Message message={message} key={i}/>)}
      </div>
    )
  }
}

const Message = ({message}) => {
  console.log(getBody(message.payload))
  return <div className='Message_preview_item'>
    <div className='Message_preview_header'>
      <div className='Message_author'>
        <div className='Message_author_picture' style={{backgroundImage: `url('http://lorempixel.com/70/70/people')`}}/>
        <div className='Message_author_name'>{getHeader(message.payload.headers, 'From')}</div>
      </div>
      <div className='Message_header'>
        <div className='Message_title'>{getHeader(message.payload.headers, 'Subject')}</div>
        <div className='Message_date'>
          <span>{capitalize(moment(getHeader(message.payload.headers, 'Date')).fromNow())}, </span>
          <span>{moment(getHeader(message.payload.headers, 'Date')).format('LL')}</span>
        </div>
      </div>
    </div>
    <div className='Message_preview_body'>
      {getBody(message.payload)}
    </div>
  </div>
}

export default MessagePreview
