export const getUsers = state => state.users.users
export const getUser = (state, id) => state.users.users[id]
export const getConnextionStatus = state => state.users.connexionStatus
export const getInscriptionStatus = state => state.users.inscriptionStatus
export const getFetchUsersStatus = state => state.users.fetchUsersStatus
export const getMe = state => state.users.me ? getUser(state, state.users.me) : null
export const getConnexionError = state => state.users.connexionError
export const getInscriptionError = state => state.users.inscriptionError
