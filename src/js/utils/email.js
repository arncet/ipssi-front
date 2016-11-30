export const getHeader = (headers, headerName) => {
  const header = headers.find(header => header.name === headerName)
  return header ? header.value : ''
}

export const getBody = message => {
  const body = typeof message.parts === 'undefined'
    ? message.body.data
    : getHTMLPart(message.parts)
  const encodedBody = body.replace(/-/g, '+').replace(/_/g, '/').replace(/\s/g, '')
  return decodeURIComponent(escape(window.atob(encodedBody)))
}

export const getHTMLPart = allParts => {
  let result = ''
  allParts.forEach(part => {
    if(typeof part.parts === 'undefined') {
      result = part.body.data
    } else {
      result = getHTMLPart(part.parts)
    }
  })
  return result
}
