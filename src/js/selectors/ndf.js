export const getNDFs = state => Object.values(state.ndf.ndfs)
export const getNDF = (state, id) => state.ndf.ndfs[id]
export const getNDFCreationStatus = state => state.ndf.creatationStatus
export const getNDFEditionStatus = state => state.ndf.editionStatus
export const getNDFStatus = state => state.ndf.status
export const getNDFDeletionStatus = state => state.ndf.deletionStatus
export const getNDFIdToDelete = state => state.ndf.ndfIdToDelete
