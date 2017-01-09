import {googleConfig} from '../config'
import moment from '../utils/moment'

export const sendEmailApi = ({message, email, obj}) => {
  const headers = {
    'To': email,
    'Subject': obj
  }

  const headerInline = Object.keys(headers).reduce((prev, header) => {
    return `${prev}${header}: ${headers[header]}\r\n`
  }, '')

  const fullMessage = headerInline + message

  const request = gapi.client.gmail.users.messages.send({
    'userId': 'me',
    'resource': {
      'raw': window.btoa(`${fullMessage}:`).replace(/\+/g, '-').replace(/\//g, '_')
    }
  })

  return new Promise((resolve, reject) => request.execute(resp => {
    if (resp.labelIds && resp.labelIds[0] === 'SENT') resolve(resp)
    else reject(resp)
  }))
}

// export const sendEmailApi = ({message, email, obj, replyTo = '', messageId = ''}) => {
//   const replyHeader = replyTo
//     ? {'Reply-To': replyTo, 'In-Reply-To': messageId, 'References': messageId}
//     : {}

//   const headers = {
//     'To': email,
//     'Subject': obj,
//     'Content-Type': 'text/html; charset=utf-8',
//     ...replyHeader
//   }

//   const headerInline = Object.keys(headers).reduce((prev, header) => {
//     return `${prev}${header}: ${headers[header]}\r\n`
//   }, '')

//   const fullMessage = headerInline + message

//   const request = gapi.client.gmail.users.messages.send({
//     'userId': 'me',
//     'resource': {
//       'raw': window.btoa(fullMessage).replace(/\+/g, '-').replace(/\//g, '_')
//     }
//   })

//   return new Promise((resolve, reject) => request.execute(resp => {
//     if (resp.labelIds && resp.labelIds[0] === "SENT") resolve(resp)
//     else reject(resp)
//   }))
// }

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

export const calendarLoadApi = () => {
  return new Promise(resolve => gapi.client.load('calendar', 'v3', resolve))
}

export const calendarFetchEventsApi = () => {
  const firstDayOfWeek = new Date(Number(moment().startOf('week').format('x'))).toISOString()
  return new Promise((resolve, reject) => {
    const request = gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': firstDayOfWeek,
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime'
    })
    request.execute(resp => {
      if (resp.items) resolve(resp.items)
      else reject()
    })
  })
}

export const calendarCreateEventApi = event => {
  return new Promise((resolve, reject) => {
    const request = gapi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    })
    request.execute(resp => {
      if (resp.id) resolve(resp)
      else reject()
    })
  })
}

export const calendarEditEventApi = event => {
  return new Promise((resolve, reject) => {
    const request = gapi.client.calendar.events.update({
      'calendarId': 'primary',
      'resource': event,
      eventId: event.id
    })
    request.execute(resp => {
      if (resp.id) resolve(resp.id)
      else reject()
    })
  })
}

export const calendarDeleteEventApi = eventId => {
  return new Promise((resolve, reject) => {
    const request = gapi.client.calendar.events.delete({
      'calendarId': 'primary',
      eventId: eventId
    })
    request.execute(resp => {
      if (!resp.error) resolve()
      else reject()
    })
  })
}
