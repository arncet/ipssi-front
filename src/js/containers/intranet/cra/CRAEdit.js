import { connect } from 'react-redux'
import {CRA_EDIT} from '../../../actions'
import {getCRA, getCRAEditionStatus} from '../../../selectors/cra'
import {getUser} from '../../../selectors/users'

import CRAForm from '../../../components/intranet/cra/CRAForm'

const mapStateToProps = (state, {params: {id}}) => {
  const cra = getCRA(state, id)
  const status = getCRAEditionStatus(state)
  const user = cra ? getUser(state, cra.userId) : null

  return {cra, user, status}
}

const mapDispatchToProps = dispatch => ({
  editCRA: cra => dispatch({type: CRA_EDIT, payload: {cra}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CRAForm)
