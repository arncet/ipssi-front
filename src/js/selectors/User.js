import get from 'lodash/get'

export const USER = 'USER'

export const getQueryStatus = (state, query) => get(state, ['query', USER, JSON.stringify(query)], {})
