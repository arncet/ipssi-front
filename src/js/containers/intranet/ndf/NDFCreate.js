import { connect } from 'react-redux'
import {NDF_CREATE} from '../../../actions'
import {getNDFCreationStatus} from '../../../selectors/ndf'

import NDFForm from '../../../components/intranet/ndf/NDFForm'

const mapStateToProps = state => {
  const status = getNDFCreationStatus(state)

  return {status}
}

const mapDispatchToProps = dispatch => ({
  createNDF: ndf => dispatch({type: NDF_CREATE, payload: {ndf}})
})

export default connect(mapStateToProps, mapDispatchToProps)(NDFForm)
