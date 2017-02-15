import { connect } from 'react-redux'
import {CONGES_EDIT} from '../../../actions'
import {getConge, getCongesEditionStatus} from '../../../selectors/conges'
import {getUser} from '../../../selectors/users'

import CongesForm from '../../../components/intranet/conges/CongesForm'

const mapStateToProps = (state, {params: {id}}) => {
  const conge = getConge(state, id)
  const status = getCongesEditionStatus(state)
  const user = conge ? getUser(state, conge.userId) : null

  return {conge, user, status}
}

const mapDispatchToProps = dispatch => ({
  editConges: conges => dispatch({type: CONGES_EDIT, payload: {conges}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CongesForm)
