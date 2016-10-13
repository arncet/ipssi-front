export const getPath = routeName => {
  switch (routeName){
    case 'le-groupe':
    case 'l-activite':
    case 'nous-rejoindre':
    case 'espace-collaborateur':
    case 'contact':
    case 'connexion':
      return `#/${routeName}`
    case 'presentation':
      return '#/le-groupe/presentation'
    case 'chiffres-cles':
      return '#/le-groupe/chiffres-cles'
    case 'notre-expertise':
      return '#/le-groupe/notre-expertise'
    case 'la-valeur-du-groupe':
      return '#/le-groupe/la-valeur-du-groupe'
    case 'nos-metiers':
      return '#/l-activite/nos-metiers'
    case 'nos-secteurs-d-activites':
      return '#/l-activite/nos-secteurs-d-activites'
    case 'ils-nous-font-confiance':
      return '#/l-activite/ils-nous-font-confiance'
    case 'les-postes-a-pourvoir':
      return '#/nous-rejoindre/les-postes-a-pourvoir'
    case 'postuler':
      return '#/nous-rejoindre/postuler'
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
    'presentation': new RegExp('^\/le-groupe/presentation'),
    'chiffres-cles': new RegExp('^\/le-groupe/chiffres-cles'),
    'notre-expertise': new RegExp('^\/le-groupe/notre-expertise'),
    'la-valeur-du-groupe': new RegExp('^\/le-groupe/la-valeur-du-groupe'),
    'nos-metiers': new RegExp('^\/l-activite/nos-metiers'),
    'nos-secteurs-d-activites': new RegExp('^\/l-activite/nos-secteurs-d-activites'),
    'ils-nous-font-confiance': new RegExp('^\/l-activite/ils-nous-font-confiance'),
    'les-postes-a-pourvoir': new RegExp('^\/nous-rejoindre/les-postes-a-pourvoir'),
    'postuler': new RegExp('^\/nous-rejoindre/postuler'),
    'home': new RegExp('^\/$')
  }

  const regexp = routeNameToPath[routeName]

  return regexp ? regexp.test(path) : false
}