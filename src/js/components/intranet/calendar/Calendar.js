import React, {Component} from 'react'
import QueryGoogleAuth from '../../../containers/queries/GoogleAuth'
import QueryCalendar from '../../../containers/queries/Calendar'
import CalendarTopbar from './CalendarTopbar'
import CalendarDaysAndHours from './CalendarDaysAndHours'

class Messages extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="Intranet_page Intranet_calendar_page">
        <QueryGoogleAuth/>
        <QueryCalendar/>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>Agenda : </h1>
          <CalendarTopbar/>
        </div>
        <div className='Intranet_body Intranet_calendar_body'>
          <CalendarDaysAndHours/>
        </div>
      </div>
    )
  }
}

export default Messages

