import { connect } from 'react-redux'
import {CV_VALID, CV_ASK_FOR_EDITION} from '../../../actions'
import {getCV, getCVValidationStatus, getCVAskForEditionStatus} from '../../../selectors/cv'

import CVForm from '../../../components/intranet/cv/CVForm'

const mapStateToProps = (state, {params: {id}}) => {
  const cv = getCV(state, id)
  const validationStatus = getCVValidationStatus(state)
  const askForEditionStatus = getCVAskForEditionStatus(state)

  return {cv, validationStatus, askForEditionStatus, inputsDisabled: true}
}

const mapDispatchToProps = dispatch => ({
  validCV: cvId => dispatch({type: CV_VALID, payload: {cvId}}),
  askForEditionCV: (cvId, comment) => dispatch({type: CV_ASK_FOR_EDITION, payload: {cvId, comment}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CVForm)
