import React, {Component} from 'react'
import QueryGoogleAuth from '../../../containers/queries/GoogleAuth'
import QueryGmail from '../../../containers/queries/Gmail'
import Loader from '../../Loader'
import moment from '../../../utils/moment'
import {getHeader} from '../../../utils/email'
import {capitalize, truncate} from 'lodash'

//Components
import MessagesTopbar from './MessagesTopbar'
import MessagePreview from './MessagePreview'

class Messages extends Component{
  constructor(props) {
    super(props)
    const currentsId = props.messages.length ? [props.messages[0].id] : []
    this.state = {currentsId}
  }

  render() {
    const {currentsId} = this.state
    const {messages} = this.props
    const currentMessages = currentsId.reduce((prev, id) => {
      return [...prev, messages.find(message => message.id === id)]
    }, [])

    return (
      <div className="Intranet_page Intranet_messages_page">
      	<QueryGoogleAuth/>
      	<QueryGmail/>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>Emails : </h1>
          <MessagesTopbar/>
        </div>
        <div className='Intranet_body Intranet_messages_body'>
          <div className='Message_bullet_line' style={{height: `${(messages.length - 1) * 170}px`}}/>
          <ul className='Messages'>
            {
              messages.map((thisMessage, i) => {
                return (
                  <Message 
                    message={thisMessage} 
                    key={i} 
                    current={currentsId.includes(thisMessage.id)} 
                    onClick={(e, id) => this.onClick(e, id)}
                    toggle={(e, id) => this.toggleCurrentId(e, id)}
                  />
                )
              })
            }
          </ul>
          <MessagePreview messages={currentMessages}/>
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.currentsId.length && nextProps.messages.length) {
      const currentsId = [nextProps.messages[0].id]
      this.setState({currentsId})
    }
  }

  onClick(e, id) {
    if(e.target.className === 'Message_checkbox_label') return
    this.setState({currentsId: [id]})
  }

  toggleCurrentId(e, id) {
    if(e.target !== e.currentTarget) return
    const currentsId = [...this.state.currentsId]
    if(currentsId.includes(id)) {
      const index = currentsId.indexOf(id)
      const messageCurrentsId = [
        ...currentsId.slice(0, index),
        ...currentsId.slice(index + 1)
      ]
      this.setState({currentsId: messageCurrentsId})
    } else {
      currentsId.push(id)
      this.setState({currentsId})
    }
  }
}

const Message = ({message, current, onClick, toggle}) => {
  return <li className={`Message_item${current ? ' Message_item_current' : ''}`} onClick={(e) => onClick(e, message.id)}>
    <div className='Message_bullet'/>
    {current ? <div className='Message_triangle'/> : null}
    <div className='Message'>
      <div className='checkbox'>
        <input type='checkbox' checked={current} readOnly/>
        <label className='Message_checkbox_label' onClick={(e) => toggle(e, message.id)}/>
      </div>
      <div className='Message_date'>
        <span>{capitalize(moment(getHeader(message.payload.headers, 'Date')).fromNow())}, </span>
        <span>{moment(getHeader(message.payload.headers, 'Date')).format('LL')}</span>
      </div>
      <div className='Message_title'>{getHeader(message.payload.headers, 'Subject')}</div>
      <div className='Message_author'>{getHeader(message.payload.headers, 'From')}</div>
      <div className='Message_description' dangerouslySetInnerHTML={{__html: truncate(message.snippet, { length: 150, separator: ' ', omission: ' ...' })}}/>
    </div>
  </li>
}

export default Messages

