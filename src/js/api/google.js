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
