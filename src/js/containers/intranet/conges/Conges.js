import { connect } from 'react-redux'
import {CONGES_VALID} from '../../../actions'
import {getConge, getCongesValidationStatus} from '../../../selectors/conges'
import {getUser} from '../../../selectors/users'

import CongesForm from '../../../components/intranet/conges/CongesForm'

const mapStateToProps = (state, {params: {id}}) => {
  const conge = getConge(state, id)
  const validationStatus = getCongesValidationStatus(state)
  const user = conge ? getUser(state, conge.userId) : null

  return {conge, validationStatus, user, inputsDisabled: true}
}

const mapDispatchToProps = dispatch => ({
  validConges: (congesId, valid, comment) => dispatch({type: CONGES_VALID, payload: {congesId, valid, comment}}),
})

export default connect(mapStateToProps, mapDispatchToProps)(CongesForm)
