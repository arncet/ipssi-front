import { connect } from 'react-redux'
import {CONGES_EDIT} from '../../../actions'
import {getConge, getCongesEditionStatus} from '../../../selectors/conges'

import CongesForm from '../../../components/intranet/conges/CongesForm'

const mapStateToProps = (state, {params: {id}}) => {
  const conge = getConge(state, id)
  const status = getCongesEditionStatus(state)

  return {conge, status}
}

const mapDispatchToProps = dispatch => ({
  editConges: conges => dispatch({type: CONGES_EDIT, payload: {conges}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CongesForm)
