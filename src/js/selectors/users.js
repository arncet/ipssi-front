export const getUsers = state => Object.values(state.users.users)
export const getUser = (state, id) => state.users.users[id]
export const getUsersCreationStatus = state => state.users.creatationStatus
export const getUsersEditionStatus = state => state.users.editionStatus
export const getUsersStatus = state => state.users.status
export const getUsersDeletionStatus = state => state.users.deletionStatus
export const getConnextionStatus = state => state.users.connexionStatus
export const getInscriptionStatus = state => state.users.inscriptionStatus
export const getFetchUsersStatus = state => state.users.fetchUsersStatus
export const getMe = state => state.users.me ? getUser(state, state.users.me) : null
export const getConnexionError = state => state.users.connexionError
export const getInscriptionError = state => state.users.inscriptionError
export const getUserIdToDelete = state => state.users.userIdToDelete
export const getProfileEditionStatus = state => state.users.profileEditionStatus
export const getAccoundDeletionStatus = state => state.users.accoundDeletionStatus
