import React from 'react'
import moment from '../../../utils/moment'

const CalendarEventPreview = ({currentEvent: {summary = 'Sans titre', start, end, location, description, htmlLink}}) => (
  <div className='Calendar_event_preview'>
    <div className='Event_tooltip'>
      <div className='Event_tooltip_summary'>
        <div className='Event_tooltip_color'/>
        <div className='Event_tooltip_summary_text'>{summary}</div>
      </div>
      <div className='Event_tooltip_date'>
        <i>
          {moment(start.dateTime).format('LL') === moment(end.dateTime).format('LL')
            ? `${moment(start.dateTime).format('LL')} ${moment(start.dateTime).format('LT')} - ${moment(end.dateTime).format('LT')}`
            : `${moment(start.dateTime).format('LLL')} - ${moment(end.dateTime).format('LLL')}`
          }
        </i>
      </div>
      {description ? <div className='Event_tooltip_description'>{description}</div> : null}
      {location ? <div className='Event_tooltip_location'>{location}</div> : null}
      <a href={htmlLink} target='_blank' className='Event_tooltip_link'><b>Lien</b></a>
    </div>
  </div>
)

export default CalendarEventPreview
