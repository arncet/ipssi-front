import { connect } from 'react-redux'
import {getCalendarEvents} from '../../selectors/google'

import Calendar from '../../components/intranet/calendar/Calendar'

const mapStateToProps = state => {
  const events = getCalendarEvents(state)
  
  return {
    events
  }
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Calendar)
