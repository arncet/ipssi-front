import { connect } from 'react-redux'
import {CV_EDIT} from '../../../actions'
import {getCV, getCVEditionStatus} from '../../../selectors/cv'
import {getUser} from '../../../selectors/users'

import CVForm from '../../../components/intranet/cv/CVForm'

const mapStateToProps = (state, {params: {id}}) => {
  const cv = getCV(state, id)
  const status = getCVEditionStatus(state)
  const user = cv ? getUser(state, cv.userId) : null

  return {cv, user, status}
}

const mapDispatchToProps = dispatch => ({
  editCV: cv => dispatch({type: CV_EDIT, payload: {cv}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CVForm)
