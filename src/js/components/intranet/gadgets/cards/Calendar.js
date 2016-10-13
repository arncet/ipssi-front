import React from 'react'
import {getPath} from '../../../../utils/routes'

const events = [
  {title: 'Le Lorem Ipsum est simplement du fau', date: '27 octobre 2016'},
  {title: 'Plusieurs variations de Lorem Ipsum', date: '01 decembre 2016'}
]

const CalendarCard = () => (
  <a className="Gadget_card Calendar_card" href={getPath('home')}>
    <div className='Gadget_header'>
      <i className='fa fa-calendar-o'/>
      <h3 className='Gadget_title'>Agenda</h3>
      <div className='Gadget_header_content'>
        <span className='Gadget_header_content_count'>{events.length}</span>
        <span className='Gadget_header_content_text'>évenemens à venirs.</span>
      </div>
    </div>
    <div className='Gadget_body'>
      <ul className='Calendars_cards_list'>
        {
          events.map((event, i) => <Event event={event} key={i}/>)
        }
      </ul>
    </div>
  </a>
)

const Event = ({event: {date, title}}) => (
  <li className='Calendar_cards_item'>
    <div className='Calendar_date' title={date}>{date}</div>
    <div className='Calendar_title' title={title}>{title}</div>
  </li>
)

export default CalendarCard
