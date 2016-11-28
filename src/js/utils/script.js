export const loadScript = (src, id, onload) => {
  if (document.querySelector(`#${id}`)) return
  const script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = src
  if (id) script.id = 'google-api-client'
  if (onload) script.onload = onload
  document.body.appendChild(script)
}
