import {CRA_LOAD, CRA_LOAD_SUCCESS, CRA_LOAD_FAILED,
 CRA_CREATE, CRA_CREATE_SUCCESS, CRA_CREATE_FAILED,
 CRA_EDIT, CRA_EDIT_SUCCESS, CRA_EDIT_FAILED,
 CRA_DELETE, CRA_DELETE_SUCCESS, CRA_DELETE_FAILED,
 CRA_VALID, CRA_VALID_SUCCESS, CRA_VALID_FAILED,
 CRA_CLEAN_STATUS, CRA_DELETE_OPEN_MODAL, CRA_DELETE_CLOSE_MODAL,
 CRA_ASK_FOR_EDITION, CRA_ASK_FOR_EDITION_SUCCESS, CRA_ASK_FOR_EDITION_FAILED} from '../actions'

const initialState = {
  isLoading: false,
  creatationStatus: '',
  editionStatus: '',
  deletionStatus: '',
  craIdToDelete: null,
  validStatus: '',
  askForEditionStatus: '',
  cras: {
    1: {
      id: 1,
      nomClient: 'Panagiotakis Wallis',
      periodeStart: 1483810607349,
      periodeEnd: 1483810607349,
      projet: 'Projet 1',
      responsableClient: 'Balbus Ilari',
      responsableClientContact: '0686 35 78 44',
      responsableClientFonction: 'CTO',
      responsableEntreprise: 'Veselko Nadeem',
      responsableEntrepriseFonction: 'Veselko Nadeem',
      responsableEntrepriseContact: '0663 66 85 45',
      rapport: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32. L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
      nbAccidentsAvecArretsHorsAccidentTrajet: 0,
      nbAccidentsSansArret: 1,
      nbAccidentsTrajet: 2,
      nbJourArretMaladie: 1,
      detailCongesAbsences: 'Rien à signaler',
      totalJourPresense: 19,
      satisfactionConsultant: 2,
      satisfactionClient: 1,
      pointAmelioration: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires',
      activitesRestantes: 'Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d\'humour.',
      commentaire: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même',
      userId: 2,
      validationStatus: 'valid'
    },
    2: {
      id: 2,
      nomClient: 'Anagiotakis Wallis',
      periodeStart: 1483810607349,
      periodeEnd: 1483810607349,
      projet: 'Projet 2',
      responsableClient: 'Balbus Ilari',
      responsableClientContact: '0686 35 78 44',
      responsableClientFonction: 'CTO',
      responsableEntreprise: 'Veselko Nadeem',
      responsableEntrepriseFonction: 'Veselko Nadeem',
      responsableEntrepriseContact: '0663 66 85 45',
      rapport: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32. L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
      nbAccidentsAvecArretsHorsAccidentTrajet: 0,
      nbAccidentsSansArret: 1,
      nbAccidentsTrajet: 2,
      nbJourArretMaladie: 1,
      detailCongesAbsences: 'Rien à signaler',
      totalJourPresense: 19,
      satisfactionConsultant: 2,
      satisfactionClient: 1,
      pointAmelioration: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires',
      activitesRestantes: 'Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d\'humour.',
      commentaire: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même',
      validationStatus: 'rejected',
      userId: 1,
      askForEditionComment: 'Demande de modification :)'
    },
    3: {
      id: 3,
      nomClient: 'Nagiotakis Wallis',
      periodeStart: 1483810607349,
      periodeEnd: 1483810607349,
      projet: 'Projet 3',
      responsableClient: 'Balbus Ilari',
      responsableClientContact: '0686 35 78 44',
      responsableClientFonction: 'CTO',
      responsableEntreprise: 'Veselko Nadeem',
      responsableEntrepriseFonction: 'Veselko Nadeem',
      responsableEntrepriseContact: '0663 66 85 45',
      rapport: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32. L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
      nbAccidentsAvecArretsHorsAccidentTrajet: 0,
      nbAccidentsSansArret: 1,
      nbAccidentsTrajet: 2,
      nbJourArretMaladie: 1,
      detailCongesAbsences: 'Rien à signaler',
      totalJourPresense: 19,
      satisfactionConsultant: 2,
      satisfactionClient: 1,
      pointAmelioration: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires',
      activitesRestantes: 'Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d\'humour.',
      commentaire: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même',
      userId: 5,
      validationStatus: 'pending'
    },
    4: {
      id: 4,
      nomClient: 'Agiotakis Wallis',
      periodeStart: 1483810607349,
      periodeEnd: 1483810607349,
      projet: 'Projet 4',
      responsableClient: 'Balbus Ilari',
      responsableClientContact: '0686 35 78 44',
      responsableClientFonction: 'CTO',
      responsableEntreprise: 'Veselko Nadeem',
      responsableEntrepriseFonction: 'Veselko Nadeem',
      responsableEntrepriseContact: '0663 66 85 45',
      rapport: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32. L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
      nbAccidentsAvecArretsHorsAccidentTrajet: 0,
      nbAccidentsSansArret: 1,
      nbAccidentsTrajet: 2,
      nbJourArretMaladie: 1,
      detailCongesAbsences: 'Rien à signaler',
      totalJourPresense: 19,
      satisfactionConsultant: 2,
      satisfactionClient: 1,
      pointAmelioration: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires',
      activitesRestantes: 'Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d\'humour.',
      commentaire: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même',
      userId: 1,
      validationStatus: 'pending'
    }
  }
}

export default function cra (state = initialState, {type, payload}) {
  switch (type) {
    case CRA_LOAD:
      return {
        ...state,
        status: 'pending'
      }
    case CRA_LOAD_SUCCESS:
      return {
        ...state,
        cras: payload.cras.reduce((prev, cra) => {
          return {...prev, [cra.id]: cra}
        }, {}),
        status: ''
      }
    case CRA_LOAD_FAILED:
      return {
        ...state,
        status: 'error'
      }
    case CRA_CREATE:
      return {
        ...state,
        creatationStatus: 'pending'
      }
    case CRA_CREATE_SUCCESS:
      return {
        ...state,
        creatationStatus: 'success',
        cras: {
          ...state.cras,
          [payload.cra.id]: payload.cra
        }
      }
    case CRA_CREATE_FAILED:
      return {
        ...state,
        creatationStatus: 'failed'
      }
    case CRA_EDIT:
      return {
        ...state,
        editionStatus: 'pending'
      }
    case CRA_EDIT_SUCCESS:
      return {
        ...state,
        editionStatus: 'success',
        cras: {
          ...state.cras,
          [payload.cra.id]: payload.cra
        }
      }
    case CRA_EDIT_FAILED:
      return {
        ...state,
        editionStatus: 'failed'
      }
    case CRA_DELETE:
      return {
        ...state,
        deletionStatus: 'pending'
      }
    case CRA_DELETE_SUCCESS: {
      const cras = Object.values(state.cras).reduce((prev, cra) => {
        return cra.id === payload.craId ? prev : {...prev, [cra.id]: cra}
      }, {})
      return {
        ...state,
        deletionStatus: 'success',
        cras,
        craIdToDelete: null
      }
    }
    case CRA_DELETE_FAILED:
      return {
        ...state,
        deletionStatus: 'failed'
      }
    case CRA_DELETE_OPEN_MODAL:
      return {
        ...state,
        craIdToDelete: payload.craId
      }
    case CRA_DELETE_CLOSE_MODAL:
      return {
        ...state,
        craIdToDelete: null
      }
    case CRA_VALID:
      return {
        ...state,
        validStatus: 'pending'
      }
    case CRA_VALID_SUCCESS:
      return {
        ...state,
        cras: {
          ...state.cras,
          [payload.craId]: {...state.cras[payload.craId], validationStatus: 'valid'}
        },
        validStatus: 'success'
      }
    case CRA_VALID_FAILED:
      return {
        ...state,
        validStatus: 'failed'
      }
    case CRA_ASK_FOR_EDITION:
      return {
        ...state,
        askForEditionStatus: 'pending'
      }
    case CRA_ASK_FOR_EDITION_SUCCESS:
      return {
        ...state,
        cras: {
          ...state.cras,
          [payload.craId]: {...state.cras[payload.craId], askForEditionComment: payload.comment}
        },
        askForEditionStatus: 'success'
      }
    case CRA_ASK_FOR_EDITION_FAILED:
      return {
        ...state,
        askForEditionStatus: 'failed'
      }
    case CRA_CLEAN_STATUS: {
      return {
        ...state,
        creatationStatus: '',
        editionStatus: '',
        deletionStatus: '',
        validStatus: '',
        askForEditionStatus: ''
      }
    }
    default:
      return state
  }
}
