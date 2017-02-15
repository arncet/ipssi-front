import React, {Component} from 'react'
import {times, capitalize} from 'lodash'
import moment from '../../../utils/moment'
import {absolutePositionFromTop} from '../../../utils/dom'
import ReactTooltip from 'react-tooltip'

class CalendarDaysAndHours extends Component{
  constructor(props) {
    super(props)
    const firstDayOfWeek = moment().startOf('week').format('x')
    this.state = {firstDayOfWeek, daysOfWeek: getDaysOfWeek(firstDayOfWeek), eventElements: []}
  }

  render() {
    const {daysOfWeek, eventElements} = this.state
    const {openCreateModal} = this.props

    return (
      <div className='Calendar_days_and_hours'>
        <Hours/>
        <Days daysOfWeek={daysOfWeek} openCreateModal={openCreateModal}/>
        {eventElements}
      </div>
    )
  }

  componentDidMount() {
    this.displayEvents(this.props)
    window.addEventListener('resize', this.displayEvents.bind(this.props, this))
  }

  componentWillReceiveProps(nextProps) {
    if(document.querySelector('.Calendar_days_wrapper')) this.displayEvents(nextProps)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.displayEvents)
  }

  displayEvents(props) {
    setTimeout(() => {
      const {events, onCurrentEventChange, openEditModal} = props
      this.setState({eventElements: events.map((event, i) => <Event event={event} onCurrentEventChange={onCurrentEventChange} openEditModal={openEditModal} key={i}/>)})
      ReactTooltip.rebuild()
    }, 100)
  }
}

const getDaysOfWeek = firstDayOfWeek => {
  return times(7).map(index => moment(Number(firstDayOfWeek)).add(index, 'days').format('x'))
}

const decomposeDate = date => {
  const hoursAndMinutes = moment(date).format('HH:mm')
  const [hour, minutes] = hoursAndMinutes.split(':')
  let day = new Date(date).setHours(0)
  day = new Date(day).setMinutes(0)
  day = new Date(day).setSeconds(0)

  return {
    hours: Number(hour),
    minutes: Number(minutes) / 60,
    day
  }
}

const Event = ({event, onCurrentEventChange, openEditModal}) => {
  const {start, end, summary} = event
  const {hours: startHours, day: startDay, minutes: startMinutes} = decomposeDate(start.dateTime, summary)
  const {hours: endHours, day: endDay, minutes: endMinutes} = decomposeDate(end.dateTime, summary)
  const element = document.querySelector(`.Day_item_${startDay}_${startHours}`)
  if (!element) return null
  const DAY_HEIGHT = 45
  const {top, left} = absolutePositionFromTop(element)
  const offsetTopMinutes = startMinutes * DAY_HEIGHT
  const daysDiff = moment(endDay).diff(moment(startDay), 'days')
  const width = (daysDiff + 1) * (element.offsetWidth + 1)
  const height = !daysDiff ? (((endHours + endMinutes) - (startHours + startMinutes) || 1) * DAY_HEIGHT) - 1 : DAY_HEIGHT

  return (
    <div
      className='Event'
      style={{top: top+offsetTopMinutes+1, left, width, height}}
      data-tip={eventTooltipString({event})}
      data-html={true}
      data-iscapture={true}
      onClick={() => onCurrentEventChange(event)}
      onDoubleClick={() => openEditModal(event.id)}
    >
      {summary || '(Sans titre)'}
    </div>
  )
}

const eventTooltipString = ({event: {summary = 'Sans titre', start, end, location, description}}) => (
  `<div class='Event_tooltip'>
    <div class='Event_tooltip_summary'>${summary}</div>
    <div class='Event_tooltip_date'>
      <i>
        ${moment(start.dateTime).format('LL') === moment(end.dateTime).format('LL')
          ? `${moment(start.dateTime).format('LL')} ${moment(start.dateTime).format('LT')} - ${moment(end.dateTime).format('LT')}`
          : `${moment(start.dateTime).format('LLL')} <br/> ${moment(end.dateTime).format('LLL')}`
        }
      </i>
    </div>
    ${description ? `<div class='Event_tooltip_description'>${description}</div>` : ''}
    ${location ? `<div class='Event_tooltip_location'>${location}</div>` : ''}
    <br/>
    <i class='Event_tooltip_more_detail'>Cliquez pour plus de detail</i>
  </div>`
)

const Days = ({daysOfWeek, openCreateModal}) => (
  <ul className='Calendar_days_wrapper'>
    {daysOfWeek.map((day, i) => <Day day={day} key={i} openCreateModal={openCreateModal}/>)}
  </ul>
)

const Day = ({day, openCreateModal}) => (
  <li className='Day'>
    <div className='Day_name'>{capitalize(moment(Number(day)).format('dddd D'))}</div>
    {
      times(24).map(index => {
        const date = moment(Number(day)).add(index, 'hours').format('x')
        return (
          <div
            className={`Day_item Day_item_${day}_${index}`}
            key={index}
            onDoubleClick={() => openCreateModal(date)}
          />
        )
      })
    }
  </li>
)

const Hours = () => (
  <ul className='Calendar_hours'>
    {
      times(24).map(index => {
        const hour = index >= 10 ? `${index}` : `0${index}`
        return <li className='Calendar_hour' key={index}>{`${hour}:00`}</li>
      }
    )}
  </ul>
)

export default CalendarDaysAndHours
