import { connect } from 'react-redux'
import {getNDF} from '../../../selectors/ndf'
import {getUser} from '../../../selectors/users'

import NDFForm from '../../../components/intranet/ndf/NDFForm'

const mapStateToProps = (state, {params: {id}}) => {
  const ndf = getNDF(state, id)
  const user = ndf ? getUser(state, ndf.userId) : null

  return {ndf, user, inputsDisabled: true}
}

export default connect(mapStateToProps)(NDFForm)
