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
  console.log(allParts)
  allParts.forEach(part => {
    if(typeof part.parts === 'undefined') {
      console.log(part.body.data)
      return part.body.data
    }
    else return getHTMLPart(part.parts)
  })
  return ''
}