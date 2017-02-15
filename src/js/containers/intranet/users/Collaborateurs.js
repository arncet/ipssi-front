import { connect } from 'react-redux'
import {getUser} from '../../../selectors/users'

import UsersForm from '../../../components/intranet/users/UsersForm'

const mapStateToProps = (state, {params: {id}}) => {
  const user = getUser(state, id)

  return {user, inputsDisabled: true}
}

export default connect(mapStateToProps)(UsersForm)
