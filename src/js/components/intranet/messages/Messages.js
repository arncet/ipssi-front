import React, {Component} from 'react'
import QueryGoogleAuth from '../../../containers/queries/GoogleAuth'
import Loader from '../../Loader'
import moment from '../../../utils/moment'
import { capitalize, truncate } from 'lodash'

//Components
import MessagesTopbar from './MessagesTopbar'
import MessagePreview from './MessagePreview'

const messages = [
  {
    id: 1,
    title: 'Sed ut perspiciatis unde omnis iste', 
    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    date: 1476370055409 
  },
  {
    id: 2,
    title: 'Sed ut perspiciatis unde omnis iste', 
    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    date: 1476370055409 
  },
  {
    id: 3,
    title: 'Sed ut perspiciatis unde omnis iste', 
    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    date: 1476370055409 
  },
  {
    id: 4,
    title: 'Sed ut perspiciatis unde omnis iste', 
    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    date: 1476370055409 
  },
  {
    id: 5,
    title: 'Sed ut perspiciatis unde omnis iste', 
    description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
    content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
    date: 1476370055409 
  }
]

class Messages extends Component{
  constructor(props) {
    super(props)
    const currentsId = messages.length ? [messages[0].id] : []
    this.state = {currentsId}
  }

  render() {
    const {currentsId} = this.state

    return (
      <div className="Intranet_page Intranet_messages_page">
      	<QueryGoogleAuth/>
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
          <MessagePreview/>
        </div>
      </div>
    )
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

const Message = ({message: {id, title, description, date}, current, onClick, toggle}) => (
  <li className={`Message_item${current ? ' Message_item_current' : ''}`} onClick={(e) => onClick(e, id)}>
    <div className='Message_bullet'/>
    {current ? <div className='Message_triangle'/> : null}
    <div className='Message'>
      <div className='checkbox'>
        <input type='checkbox' checked={current} readOnly/>
        <label className='Message_checkbox_label' onClick={(e) => toggle(e, id)}/>
      </div>
      <div className='Message_date'>
        <span>{capitalize(moment(date).fromNow())}, </span>
        <span>{moment(date).format('LL')}</span>
      </div>
      <div className='Message_title'>{title}</div>
      <div className='Message_description'>{truncate(description, { length: 150, separator: ' ', omission: ' ...' })}</div>
    </div>
  </li>
)

export default Messages

