import {googleConfig} from '../config'

export const sendEmailApi = () => {
  const headers = {
    'To': 'arnaud.cetoute@hotmail.fr',
    'Subject': 'Test Gmail API'
  }

  const message = 'test gmail api :)'

  const headerInline = Object.keys(headers).reduce((prev, header) => {
    return `${prev}${header}: ${headers[header]}\r\n`
  }, '')

  const email = headerInline + message

  const request = gapi.client.gmail.users.messages.send({
    'userId': 'me',
    'resource': {
      'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
    }
  })

  return new Promise((resolve, reject) => request.execute(resp => {
    if (resp.id) resolve(resp)
    else reject(resp)
  }))
}

export const googleAuthApi = () => {
  return new Promise((resolve, reject) => {
    gapi.auth.authorize({
      client_id: googleConfig.CLIENT_ID,
      scope: googleConfig.SCOPES,
      immediate: false
    }, (authResult) => {
      if (authResult && !authResult.error) resolve()
      else reject()
    })
  })
}

export const gmailLoadApi = () => {
  return new Promise(resolve => gapi.client.load('gmail', 'v1', resolve))
}

export const gmailFetchEmail = id => {
  return new Promise(resolve => {
    const request = gapi.client.gmail.users.messages.get({id, 'userId': 'me'}) 
    request.execute(resp => resolve(resp))
  })
}

export const gmailFetchEmailsApi = () => {
  return new Promise((resolve, reject) => {
    const request = gapi.client.gmail.users.messages.list({'userId': 'me'})
    request.execute(resp => {
      if (resp.messages) resolve(resp.messages)
      else reject()
    })
  })
}

export const gmailFetchLabelsApi = () => {
  return new Promise((resolve, reject) => {
    const request = gapi.client.gmail.users.labels.list({'userId': 'me'})
    request.execute(resp => {
      if (resp.labels) resolve(resp.labels)
      else reject()
    })
  })
}
