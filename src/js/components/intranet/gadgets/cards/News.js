import React from 'react'
import {getPath} from '../../../../utils/routes'

const news = [
  {title: 'Le Lorem Ipsum est simplement du fau', date: '27 octobre 2016'},
  {title: 'Plusieurs variations de Lorem Ipsum', date: '01 decembre 2016'},
  {title: 'Contrairement à une opinion répandue', date: '25 decembre 2016'},
  {title: 'Contrairement à une opinion répandue', date: '25 decembre 2016'},
  {title: 'Contrairement à une opinion répandue', date: '25 decembre 2016'},
  {title: 'Contrairement à une opinion répandue', date: '25 decembre 2016'},
  {title: 'Contrairement à une opinion répandue', date: '25 decembre 2016'}
]

const NewCard = () => (
  <a className="Gadget_card New_card" href={getPath('intranet-news')}>
    <div className='Gadget_header'>
      <i className='fa fa-newspaper-o'/>
      <h3 className='Gadget_title'>Actualités</h3>
      <div className='Gadget_header_content'>
        <span className='Gadget_header_content_count'>{news.length}</span>
        <span className='Gadget_header_content_text'>actualités.</span>
      </div>
    </div>
    <div className='Gadget_body'>
      <ul className='News_cards_list'>
        {
          news.map((thisNew, i) => <Event new={thisNew} key={i}/>)
        }
      </ul>
    </div>
  </a>
)

const Event = ({new: {date, title}}) => (
  <li className='New_cards_item'>
    <div className='New_date' title={date}>{date}</div>
    <div className='New_title' title={title}>{title}</div>
  </li>
)

export default NewCard
