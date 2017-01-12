import { connect } from 'react-redux'
import {CV_CREATE} from '../../../actions'
import {getCVCreationStatus} from '../../../selectors/cv'

import CVForm from '../../../components/intranet/cv/CVForm'

const mapStateToProps = state => {
  const status = getCVCreationStatus(state)

  return {status}
}

const mapDispatchToProps = dispatch => ({
  createCV: cv => dispatch({type: CV_CREATE, payload: {cv}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CVForm)
