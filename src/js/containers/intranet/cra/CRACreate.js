import { connect } from 'react-redux'
import {CRA_CREATE} from '../../../actions'
import {getCRACreationStatus} from '../../../selectors/cra'

import CRAForm from '../../../components/intranet/cra/CRAForm'

const mapStateToProps = state => {
  const status = getCRACreationStatus(state)

  return {status}
}

const mapDispatchToProps = dispatch => ({
  createCRA: cra => dispatch({type: CRA_CREATE, payload: {cra}})
})

export default connect(mapStateToProps, mapDispatchToProps)(CRAForm)
