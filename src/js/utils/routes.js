export const getPath = (routeName, params) => {
  switch (routeName){
    case 'le-groupe':
    case 'l-activite':
    case 'nous-rejoindre':
    case 'espace-collaborateur':
    case 'contact':
    case 'connexion':
    case 'profil':
      return `${routeName}`

    case 'presentation':
      return 'le-groupe/presentation'
    case 'chiffres-cles':
      return 'le-groupe/chiffres-cles'
    case 'notre-expertise':
      return 'le-groupe/notre-expertise'
    case 'la-valeur-du-groupe':
      return 'le-groupe/la-valeur-du-groupe'
    case 'nos-metiers':
      return 'l-activite/nos-metiers'
    case 'nos-secteurs-d-activites':
      return 'l-activite/nos-secteurs-d-activites'
    case 'ils-nous-font-confiance':
      return 'l-activite/ils-nous-font-confiance'
    case 'les-postes-a-pourvoir':
      return 'nous-rejoindre/les-postes-a-pourvoir'
    case 'postuler':
      return 'nous-rejoindre/postuler'

    case 'intranet':
      return 'intranet'
    case 'intranet-messages':
      return 'intranet/messages'
    case 'intranet-calendar':
      return 'intranet/calendrier'

    case 'intranet-news':
      return 'intranet/actualites'
    case 'intranet-news-create':
      return 'intranet/actualites/creer'
    case 'intranet-news-id':
      return `intranet/actualites/${params.id}`
    case 'intranet-news-id-edit':
      return `intranet/actualites/${params.id}/editer`
    case 'news':
      return `actualites`
    case 'news-id':
      return `actualites/${params.id}`

    case 'intranet-cra':
      return 'intranet/comptes-rendus-d-activites'
    case 'intranet-cra-create':
      return 'intranet/comptes-rendus-d-activites/creer'
    case 'intranet-cra-id':
      return `intranet/comptes-rendus-d-activites/${params.id}`
    case 'intranet-cra-id-edit':
      return `intranet/comptes-rendus-d-activites/${params.id}/editer`

    case 'intranet-demandes-de-conges':
      return 'intranet/demandes-de-conges'
    case 'intranet-demandes-de-conges-create':
      return 'intranet/demandes-de-conges/creer'
    case 'intranet-demandes-de-conges-id':
      return `intranet/demandes-de-conges/${params.id}`
    case 'intranet-demandes-de-conges-id-edit':
      return `intranet/demandes-de-conges/${params.id}/editer`

    case 'intranet-cvtheque':
      return 'intranet/cvtheque'
    case 'intranet-cvtheque-create':
      return 'intranet/cvtheque/creer'
    case 'intranet-cvtheque-id':
      return `intranet/cvtheque/${params.id}`
    case 'intranet-cvtheque-id-edit':
      return `intranet/cvtheque/${params.id}/editer`

    case 'intranet-offres-de-poste':
      return 'intranet/offres-de-poste'
    case 'intranet-offres-de-poste-create':
      return 'intranet/offres-de-poste/creer'
    case 'intranet-offres-de-poste-id':
      return `intranet/offres-de-poste/${params.id}`
    case 'intranet-offres-de-poste-id-edit':
      return `intranet/offres-de-poste/${params.id}/editer`
    case 'offres-de-poste':
      return `offres-de-poste`
    case 'offres-de-poste-id':
      return `offres-de-poste/${params.id}`

    case 'intranet-candidatures':
      return 'intranet/candidatures'
    case 'intranet-candidatures-create':
      return 'intranet/candidatures/creer'
    case 'intranet-candidatures-id':
      return `intranet/candidatures/${params.id}`
    case 'intranet-candidatures-id-edit':
      return `intranet/candidatures/${params.id}/editer`
    case 'candidatures':
      return `candidatures`
    case 'candidatures-id':
      return `candidatures/${params.id}`

    case 'intranet-users':
      return 'intranet/utilisateurs'
    case 'intranet-users-create':
      return 'intranet/utilisateurs/creer'
    case 'intranet-users-id':
      return `intranet/utilisateurs/${params.id}`
    case 'intranet-users-id-edit':
      return `intranet/utilisateurs/${params.id}/editer`
    case 'users-id':
      return `utilisateurs/${params.id}`

    case 'intranet-collaborateurs':
      return 'intranet/collaborateurs'
    case 'intranet-collaborateurs-create':
      return 'intranet/collaborateurs/creer'
    case 'intranet-collaborateurs-id':
      return `intranet/collaborateurs/${params.id}`
    case 'intranet-collaborateurs-id-edit':
      return `intranet/collaborateurs/${params.id}/editer`

    case 'intranet-notes-de-frais':
      return 'intranet/notes-de-frais'
    case 'intranet-notes-de-frais-create':
      return 'intranet/notes-de-frais/creer'
    case 'intranet-notes-de-frais-id':
      return `intranet/notes-de-frais/${params.id}`
    case 'intranet-notes-de-frais-id-edit':
      return `intranet/notes-de-frais/${params.id}/editer`

    case 'cv-id':
      return `cv/${params.id}`
    case 'profile-id':
      return `profil/${params.id}`

    case 'home':
    default:
      return ''
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
    'profil': new RegExp('^\/profil'),
    'intranet-cra': new RegExp('^\/intranet/comptes-rendus-d-activites'),
    'intranet-demandes-de-conges': new RegExp('^\/intranet/demandes-de-conges'),
    'intranet-cvtheque': new RegExp('^\/intranet/cvtheque'),
    'intranet-offres-de-poste': new RegExp('^\/intranet/offres-de-poste'),
    'home': new RegExp('^\/$')
  }

  const regexp = routeNameToPath[routeName]

  return regexp ? regexp.test(path) : false
}

export const IMAGES_ROUTE = 'assets/images'
