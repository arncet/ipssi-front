import { connect } from 'react-redux'
import {CONGES_VALID} from '../../../actions'
import {getConge, getCongesValidationStatus} from '../../../selectors/conges'

import CongesForm from '../../../components/intranet/conges/CongesForm'

const mapStateToProps = (state, {params: {id}}) => {
  const conge = getConge(state, id)
  const validationStatus = getCongesValidationStatus(state)

  return {conge, validationStatus, inputsDisabled: true}
}

const mapDispatchToProps = dispatch => ({
  validConges: congesId => dispatch({type: CONGES_VALID, payload: {congesId}}),
})

export default connect(mapStateToProps, mapDispatchToProps)(CongesForm)
