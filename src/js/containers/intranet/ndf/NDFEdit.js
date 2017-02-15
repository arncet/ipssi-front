import { connect } from 'react-redux'
import {NDF_EDIT} from '../../../actions'
import {getNDF, getNDFEditionStatus} from '../../../selectors/ndf'
import {getUser} from '../../../selectors/users'

import NDFForm from '../../../components/intranet/ndf/NDFForm'

const mapStateToProps = (state, {params: {id}}) => {
  const ndf = getNDF(state, id)
  const status = getNDFEditionStatus(state)
  const user = ndf ? getUser(state, ndf.userId) : null

  return {ndf, user, status}
}

const mapDispatchToProps = dispatch => ({
  editNDF: ndf => dispatch({type: NDF_EDIT, payload: {ndf}})
})

export default connect(mapStateToProps, mapDispatchToProps)(NDFForm)
