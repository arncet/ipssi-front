export const getCVs = state => Object.values(state.cv.cvs)
export const getCVStatus = state => state.cv.status
export const getCV = (state, id) => state.cv.cvs[id]
export const getCVCreationStatus = state => state.cv.creatationStatus
export const getCVEditionStatus = state => state.cv.editionStatus
export const getCVDeletionStatus = state => state.cv.deletionStatus
export const getCVIdToDelete = state => state.cv.cvIdToDelete
export const getCVValidationStatus = state => state.cv.validStatus
export const getCVAskForEditionStatus = state => state.cv.askForEditionStatus
