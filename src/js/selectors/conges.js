export const getConges = state => Object.values(state.conges.conges)
export const getCongesStatus = state => state.conges.status
export const getConge = (state, id) => state.conges.conges[id]
export const getCongesCreationStatus = state => state.conges.creatationStatus
export const getCongesEditionStatus = state => state.conges.editionStatus
export const getCongesDeletionStatus = state => state.conges.deletionStatus
export const getCongesIdToDelete = state => state.conges.congesIdToDelete
export const getCongesValidationStatus = state => state.conges.validStatus
export const getCongesByUserId = (state, userId) => getConges(state).filter(conge => conge.userId === userId)
