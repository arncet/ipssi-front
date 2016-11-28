export const isAuthentified = state => state.google.auth.authentified

//Gmail
export const gmailApiIsLoaded = state => state.gmail.loaded
export const getGmailInbox = state => state.gmail.inbox
export const getGmailOutbox = state => state.gmail.outbox
