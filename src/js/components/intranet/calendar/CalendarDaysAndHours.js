import React, {Component} from 'react'
import {times, capitalize} from 'lodash'
import moment from '../../../utils/moment'
import {absolutePositionFromTop} from '../../../utils/dom'

const events = [
  {start: {date: 1480546800000, dateTime: 20}, end: {date: 1480546800000, dateTime: 22.5}, title: 'jeudi 20-22h30'},
  {start: {date: 1480546800000, dateTime: 4}, end: {date: 1480633200000, dateTime: 4}, title: 'jeudi 4h - vendredi'},
  {start: {date: 1480546800000, dateTime: 10}, end: {date: 1480546800000, dateTime: 13}, title: 'jeudi 10-13h'},
  {start: {date: 1480546800000, dateTime: 12}, end: {date: 1480546800000, dateTime: 12}, title: 'jeudi 12h'},
  {start: {date: 1480806000000, dateTime: 0}, end: {date: 1480806000000, dateTime: 0}, title: 'dimanche 00h'},
  {start: {date: 1480806000000, dateTime: 23}, end: {date: 1480806000000, dateTime: 23}, title: 'dimanche 23h'},
  {start: {date: 1480806000000, dateTime: 2}, end: {date: 1480806000000, dateTime: 2}, title: 'dimanche 2h'}
]

class CalendarDaysAndHours extends Component{
  constructor(props) {
    super(props)
    const firstDayOfWeek = moment().startOf('week').format('x')
    this.state = {firstDayOfWeek, daysOfWeek: getDaysOfWeek(firstDayOfWeek), eventElements: []}
  }

  render() {
    const {daysOfWeek, eventElements} = this.state

    return (
      <div className='Calendar_days_and_hours'>
        <Hours/>
        <Days daysOfWeek={daysOfWeek}/>
        {eventElements}
      </div>
    )
  }

  componentDidMount() {
    this.displayEvents()
    window.addEventListener('resize', this.displayEvents.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.displayEvents.bind(this))
  }

  displayEvents() {
    this.setState({eventElements: events.map((event, i) => <Event event={event} key={i}/>)})
  }
}

const getDaysOfWeek = firstDayOfWeek => {
  return times(7).map(index => moment(Number(firstDayOfWeek)).add(index, 'days').format('x'))
}

const Event = ({event: {start, end, title}}) => {
  const element = document.querySelector(`.Day_item_${start.date}_${start.dateTime}`)
  const {top, left} = absolutePositionFromTop(element)
  const daysDiff = moment(end.date).diff(moment(start.date), 'days')
  const width = (daysDiff + 1) * (element.offsetWidth + 1)
  const height = ((end.dateTime - start.dateTime || 1) * 45) - 1
  return <div className='Event' style={{top: top+1, left, width, height}}>{title}</div>
}

const Days = ({daysOfWeek}) => (
  <ul className='Calendar_days_wrapper'>
    {daysOfWeek.map((day, i) => <Day day={day} key={i}/>)}
  </ul>
)

const Day = ({day}) => (
  <li className='Day'>
    <div className='Day_name'>{capitalize(moment(Number(day)).format('dddd D'))}</div>
    {times(24).map(index => <div className={`Day_item Day_item_${day}_${index}`} key={index}/>)}
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
