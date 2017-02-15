import React from 'react'

//Components
import MessageCard from '../gadgets/cards/Message'
import CalendarCard from '../gadgets/cards/Calendar'

const HomeIntranet = () => (
  <div className="Home_intranet">
    <ul className='Gadgets_cards'>
      <li className='Gadget_item'><MessageCard/></li>
      <li className='Gadget_item'><CalendarCard/></li>
    </ul>
  </div>
)

export default HomeIntranet
