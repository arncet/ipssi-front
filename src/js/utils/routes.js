export const getPath = routeName => {
  switch (routeName){
    case 'le-groupe':
    case 'l-activite':
    case 'nous-rejoindre':
    case 'espace-collaborateur':
    case 'contact':
    case 'connexion':
      return `#/${routeName}`
    case 'home':
    default:
      return '#/'
  }
}

export const inRoute = (path, routeName) => {
  const routeNameToPath = {
    'le-groupe': new RegExp('^\/le-groupe'),
    'l-activite': new RegExp('^\/l-activite'),
    'nous-rejoindre': new RegExp('^\/nous-rejoindre'),
    'espace-collaborateur': new RegExp('^\/espace-collaborateur'),
    'contact': new RegExp('^\/contact'),
    'connexion': new RegExp('^\/connexion'),
    'home': new RegExp('^\/$')
  }

  const regexp = routeNameToPath[routeName]

  return regexp ? regexp.test(path) : false
}