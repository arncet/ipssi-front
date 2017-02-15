export const getCandidatures = state => Object.values(state.candidatures.candidatures)
export const getCandidaturesStatus = state => state.candidatures.candidaturesStatus
export const getCandidature = (state, id) => state.candidatures.candidatures[id]
export const getCandidaturesCreationStatus = state => state.candidatures.creationStatus
export const getCandidaturesEditionStatus = state => state.candidatures.editionStatus
export const getCandidaturesDeletionStatus = state => state.candidatures.deletionStatus
export const getCandidatureIdToDelete = state => state.candidatures.candidatureIdToDelete
export const getCandidaturesValidStatus = state => state.candidatures.candidatureValidStatus
export const getCandidaturesByUserId = (state, userId) => getCandidatures(state).filter(candidature => candidature.userId === userId)
export const getHasAlreadyPostulate = (state, jobId, userId) => getCandidatures(state).find(candidature => candidature.userId === userId && candidature.jobId === jobId)
