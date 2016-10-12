import simpleQueryBuilder from '../../builders/simpleQueryBuilder'
import { userLogin } from '../../actions'
import { getQueryStatus } from '../../selectors/user'

export default simpleQueryBuilder(userLogin, getQueryStatus)
