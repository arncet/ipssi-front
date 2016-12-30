import React, {Component} from 'react'
import moment from '../../../utils/moment'
import {getHeader} from '../../../utils/email'
import capitalize from 'lodash/capitalize'
import truncate from 'lodash/truncate'

//Components
import Loader from '../../Loader'
import Pagination from '../../Pagination'
import MessagesTopbar from './MessagesTopbar'
import MessagePreview from './MessagePreview'
import MessageCompose from '../../../containers/intranet/MessageCompose'

//Queries
import QueryGoogleAuth from '../../../containers/queries/GoogleAuth'
import QueryGmail from '../../../containers/queries/Gmail'

class Messages extends Component{
  constructor(props) {
    super(props)
    const currentsId = props.messages.length ? [props.messages[0].id] : []
    this.state = {currentsId, page: 0, nbPages: Math.ceil(props.messages.length % 8)}
  }

  render() {
    const {currentsId, page, nbPages} = this.state
    const {messages, isLoading, openComposeMessageModal} = this.props
    const displayedMessages = messages.slice(page * 8, page * 8 + 8)
    const currentMessages = currentsId.reduce((prev, id) => {
      return [...prev, messages.find(message => message.id === id)]
    }, [])

    return (
      <div className='Intranet_page Intranet_messages_page'>
        <QueryGoogleAuth/>
        <QueryGmail/>
        {isLoading ? <Loader message='Chargement de vos emails ...'/> : null}
        <MessageCompose/>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>Emails : </h1>
          <MessagesTopbar openComposeMessageModal={openComposeMessageModal}/>
          <Pagination
            customClasse='Messages_pagination'
            onChange={pageClicked => this.setState({page: pageClicked})}
            page={page}
            nbPages={nbPages}
          />
        </div>
        <div className='Intranet_body Intranet_messages_body'>
          <div className='Message_bullet_line' style={{height: `${(displayedMessages.length - 1) * 170}px`}}/>
          {
            messages.length
              ? <ul className='Messages'>
                  {
                    displayedMessages.map((thisMessage, i) => {
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
              : null
          }
          {currentMessages.length ? <MessagePreview messages={currentMessages}/> : null}
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.currentsId.length && nextProps.messages.length) {
      const currentsId = [nextProps.messages[0].id]
      const nbPages = Math.ceil(nextProps.messages.length % 8)
      const page = page && this.state.page < nbPages ? nbPages : this.state.page
      this.setState({currentsId, nbPages, page})
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

