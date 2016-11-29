export const isAuthentified = state => state.google.auth.authentified

//Gmail
export const gmailApiIsLoaded = state => state.google.gmail.loaded
export const getGmailEmails = state => state.google.gmail.emails
export const getGmailLabels = state => state.google.gmail.labels
