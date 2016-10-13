import React from 'react'

//Components
import MessageCard from '../gadgets/cards/Message'
import CalendarCard from '../gadgets/cards/Calendar'
import NewsCard from '../gadgets/cards/News'

const HomeIntranet = () => (
  <div className="Home_intranet">
    <ul className='Gadgets_cards'>
      <li className='Gadget_item'><MessageCard/></li>
      <li className='Gadget_item'><CalendarCard/></li>
      <li className='Gadget_item'><NewsCard/></li>
    </ul>
  </div>
)

export default HomeIntranet
