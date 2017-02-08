export const getAllNews = state => Object.values(state.news.allNews)
export const getNewsStatus = state => state.news.status
export const getNews = (state, id) => state.news.allNews[id]
export const getNewsCreationStatus = state => state.news.creatationStatus
export const getNewsEditionStatus = state => state.news.editionStatus
export const getNewsDeletionStatus = state => state.news.deletionStatus
export const getNewsIdToDelete = state => state.news.newsIdToDelete
