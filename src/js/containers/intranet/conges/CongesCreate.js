import { connect } from 'react-redux'
import {CONGES_CREATE} from '../../../actions'
import {getCongesCreationStatus} from '../../../selectors/conges'

import CongesForm from '../../../components/intranet/conges/CongesForm'

const mapStateToProps = state => {
  const status = getCongesCreationStatus(state)

  return {status}
}

const mapDispatchToProps = dispatch => ({
  createConges: conges => dispatch({type: CONGES_CREATE, payload: {conges}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CongesForm)
