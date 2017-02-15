import { connect } from 'react-redux'
import {CRA_VALID, CRA_ASK_FOR_EDITION} from '../../../actions'
import {getCRA, getCRAValidationStatus, getCRAAskForEditionStatus} from '../../../selectors/cra'
import {getUser} from '../../../selectors/users'

import CRAForm from '../../../components/intranet/cra/CRAForm'

const mapStateToProps = (state, {params: {id}}) => {
  const cra = getCRA(state, id)
  const validationStatus = getCRAValidationStatus(state)
  const askForEditionStatus = getCRAAskForEditionStatus(state)
  const user = cra ? getUser(state, cra.userId) : null

  return {cra, validationStatus, askForEditionStatus, user, inputsDisabled: true}
}

const mapDispatchToProps = dispatch => ({
  validCRA: craId => dispatch({type: CRA_VALID, payload: {craId}}),
  askForEditionCRA: (craId, comment) => dispatch({type: CRA_ASK_FOR_EDITION, payload: {craId, comment}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CRAForm)
