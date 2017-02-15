export const getCRAs = state => Object.values(state.cra.cras)
export const getCRAStatus = state => state.cra.status
export const getCRA = (state, id) => state.cra.cras[id]
export const getCRACreationStatus = state => state.cra.creatationStatus
export const getCRAEditionStatus = state => state.cra.editionStatus
export const getCRADeletionStatus = state => state.cra.deletionStatus
export const getCRAIdToDelete = state => state.cra.craIdToDelete
export const getCRAValidationStatus = state => state.cra.validStatus
export const getCRAAskForEditionStatus = state => state.cra.askForEditionStatus
export const getCRAsByUserId = (state, userId) => getCRAs(state).filter(cra => cra.userId === userId)
