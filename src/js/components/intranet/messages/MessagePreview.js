import React, {Component} from 'react'
import moment from '../../../utils/moment'
import { capitalize } from 'lodash'

const message = {
  id: 1,
  title: 'Sed ut perspiciatis unde omnis iste',
  description: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque t enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure repreh"',
  content: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
  date: 1476370055409
}

class MessagePreview extends Component{

  render() {

    return(
      <div className='Message_preview'>
        <div className='Message_preview_header'>
          <div className='Message_author'>
            <div className='Message_author_picture' style={{backgroundImage: `url('http://lorempixel.com/70/70/people')`}}/>
            <div className='Message_author_name'>Llew Timur</div>
            <div className='Message_author_post'>Quelqu'un d'important</div>
          </div>
          <div className='Message_header'>
            <div className='Message_title'>{message.title}</div>
            <div className='Message_description'>{message.description}</div>
            <div className='Message_date'>
              <span>{capitalize(moment(message.date).fromNow())}, </span>
              <span>{moment(message.date).format('LL')}</span>
            </div>
          </div>
        </div>
        <div className='Message_preview_body'>
          {message.content}
        </div>
      </div>
    )
  }
}

export default MessagePreview
