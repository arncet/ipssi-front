import React, {Component} from 'react'
import {connect} from 'react-redux'
import {GOOGLE_FETCH_EVENTS, GOOGLE_LOAD_CALENDAR} from '../../actions'
import {isAuthentified} from '../../selectors/auth'
import {calendarApiIsLoaded} from '../../selectors/calendar'

class QueryCalendar extends Component {
  render () {
    return <noscript/>
  }

  componentWillMount () {
    this.request(this.props)
  }

  componentWillReceiveProps(nextProps) {
    this.request(nextProps)
  }

  request(props) {
    if (props.authentified) {
      if (props.calendarLoaded) props.fetchEvents()
      else props.loadCalendarApi()
    }
  }
}

const mapStateToProps = state => {
  const calendarLoaded = calendarApiIsLoaded(state)
  const authentified = isAuthentified(state)

  return {
    calendarLoaded,
    authentified
  }
}

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch({type: GOOGLE_FETCH_EVENTS}),
  loadCalendarApi: () => dispatch({type: GOOGLE_LOAD_CALENDAR})
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QueryCalendar)
