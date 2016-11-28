import React from 'react'
import {getPath} from '../../../../utils/routes'

const messages = [
  {title: 'Le Lorem Ipsum est simplement du fau', author: 'Belenus Bence'},
  {title: 'Plusieurs variations de Lorem Ipsum', author: 'Conner Tex'},
  {title: 'Contrairement à une opinion répandue', author: 'Athanasios Olympiodoros'},
  {title: 'Le Lorem Ipsum est simplement du fau', author: 'Belenus Bence'},
  {title: 'Plusieurs variations de Lorem Ipsum', author: 'Conner Tex'}
]

const MessageCard = () => (
  <a className="Gadget_card Message_card" href={getPath('intranet-messages')}>
    <div className='Gadget_header'>
      <i className='fa fa-envelope-o'/>
      <h3 className='Gadget_title'>Messagerie</h3>
      <div className='Gadget_header_content'>
        <span className='Gadget_header_content_count'>{messages.length}</span>
        <span className='Gadget_header_content_text'>nouveaux messages.</span>
      </div>
    </div>
    <div className='Gadget_body'>
      <ul className='Messages_cards_list'>
        {
          messages.map((message, i) => <Message message={message} key={i}/>)
        }
      </ul>
    </div>
  </a>
)

const Message = ({message: {author, title}}) => (
  <li className='Message_cards_item'>
    <div className='Message_author' title={author}>{author}</div>
    <div className='Message_title' title={title}>{title}</div>
  </li>
)

export default MessageCard
