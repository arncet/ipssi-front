import {CRA_LOAD, CRA_LOAD_SUCCESS, CRA_LOAD_FAILED,
 CRA_CREATE, CRA_CREATE_SUCCESS, CRA_CREATE_FAILED,
 CRA_EDIT, CRA_EDIT_SUCCESS, CRA_EDIT_FAILED,
 CRA_DELETE, CRA_DELETE_SUCCESS, CRA_DELETE_FAILED,
 CRA_CLEAN_STATUS, CRA_DELETE_OPEN_MODAL, CRA_DELETE_CLOSE_MODAL} from '../actions'

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
      projet: 'Le nom du projet',
      responsableClient: 'Balbus Ilari',
      responsableClientContact: '0686 35 78 44',
      responsableClientFonction: 'Fait un truc',
      responsableEntreprise: 'Veselko Nadeem',
      responsableEntrepriseFonction: 'Veselko Nadeem',
      responsableEntrepriseContact: '0663 66 85 45',
      collaborateurEntreprise: 'Serge Osip',
      collaborateurEntrepriseFonction: 'Serge Osip',
      collaborateurEntrepriseContact: '0773 67 00 23',
      rapport: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32. L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
      nbAccidentsAvecArretsHorsAccidentTrajet: 0,
      nbAccidentsSansArret: 1,
      nbAccidentsTrajet: 2,
      nbPresqueAccident: 0,
      nbJourArretMaladie: 1,
      detailCongesAbsences: 'Nothing',
      totalJourPresense: 19,
      satisfactionConsultant: 2,
      satisfactionClient: 1,
      pointAmelioration: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires',
      activitesRestantes: 'Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d\'humour.',
      commentaire: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même',
      consultantSignatureLieuDate: '10 decembre 2017, Lyon',
      consultantSignature: 'I. Balbus',
      responsableEntrepriseSignatureLieuDate: '10 decembre 2017, Lyon',
      responsableEntrepriseSignature: 'N. Veselko',
      responsableClientSignatureLieuDate: '10 decembre 2017, Lyon',
      responsableClientSignature: 'O. Serge',
      consultant: 'Asip Serge',
      validationStatus: 'valid'
    },
    2: {
      id: 2,
      nomClient: 'Anagiotakis Wallis',
      periodeStart: 1483810607349,
      periodeEnd: 1483810607349,
      projet: 'The best project',
      responsableClient: 'Balbus Ilari',
      responsableClientContact: '0686 35 78 44',
      responsableClientFonction: 'Fait un truc',
      responsableEntreprise: 'Veselko Nadeem',
      responsableEntrepriseFonction: 'Veselko Nadeem',
      responsableEntrepriseContact: '0663 66 85 45',
      collaborateurEntreprise: 'Serge Osip',
      collaborateurEntrepriseFonction: 'Serge Osip',
      collaborateurEntrepriseContact: '0773 67 00 23',
      rapport: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32. L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
      nbAccidentsAvecArretsHorsAccidentTrajet: 0,
      nbAccidentsSansArret: 1,
      nbAccidentsTrajet: 2,
      nbPresqueAccident: 0,
      nbJourArretMaladie: 1,
      detailCongesAbsences: 'Nothing',
      totalJourPresense: 19,
      satisfactionConsultant: 2,
      satisfactionClient: 1,
      pointAmelioration: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires',
      activitesRestantes: 'Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d\'humour.',
      commentaire: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même',
      consultantSignatureLieuDate: '10 decembre 2017, Lyon',
      consultantSignature: 'I. Balbus',
      responsableEntrepriseSignatureLieuDate: '10 decembre 2017, Lyon',
      responsableEntrepriseSignature: 'N. Veselko',
      responsableClientSignatureLieuDate: '10 decembre 2017, Lyon',
      responsableClientSignature: 'O. Serge',
      consultant: 'Bosip Serge',
      validationStatus: 'rejected',
      askForEditionComment: 'Demande de modification :)'
    },
    3: {
      id: 3,
      nomClient: 'Nagiotakis Wallis',
      periodeStart: 1483810607349,
      periodeEnd: 1483810607349,
      projet: 'Nothing',
      responsableClient: 'Balbus Ilari',
      responsableClientContact: '0686 35 78 44',
      responsableClientFonction: 'Fait un truc',
      responsableEntreprise: 'Veselko Nadeem',
      responsableEntrepriseFonction: 'Veselko Nadeem',
      responsableEntrepriseContact: '0663 66 85 45',
      collaborateurEntreprise: 'Serge Osip',
      collaborateurEntrepriseFonction: 'Serge Osip',
      collaborateurEntrepriseContact: '0773 67 00 23',
      rapport: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32. L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
      nbAccidentsAvecArretsHorsAccidentTrajet: 0,
      nbAccidentsSansArret: 1,
      nbAccidentsTrajet: 2,
      nbPresqueAccident: 0,
      nbJourArretMaladie: 1,
      detailCongesAbsences: 'Nothing',
      totalJourPresense: 19,
      satisfactionConsultant: 2,
      satisfactionClient: 1,
      pointAmelioration: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires',
      activitesRestantes: 'Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d\'humour.',
      commentaire: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même',
      consultantSignatureLieuDate: '10 decembre 2017, Lyon',
      consultantSignature: 'I. Balbus',
      responsableEntrepriseSignatureLieuDate: '10 decembre 2017, Lyon',
      responsableEntrepriseSignature: 'N. Veselko',
      responsableClientSignatureLieuDate: '10 decembre 2017, Lyon',
      responsableClientSignature: 'O. Serge',
      consultant: 'Cosip Serge',
      validationStatus: 'pending'
    },
    4: {
      id: 4,
      nomClient: 'Agiotakis Wallis',
      periodeStart: 1483810607349,
      periodeEnd: 1483810607349,
      projet: 'Un projet',
      responsableClient: 'Balbus Ilari',
      responsableClientContact: '0686 35 78 44',
      responsableClientFonction: 'Fait un truc',
      responsableEntreprise: 'Veselko Nadeem',
      responsableEntrepriseFonction: 'Veselko Nadeem',
      responsableEntrepriseContact: '0663 66 85 45',
      collaborateurEntreprise: 'Serge Osip',
      collaborateurEntrepriseFonction: 'Serge Osip',
      collaborateurEntrepriseContact: '0773 67 00 23',
      rapport: 'Contrairement à une opinion répandue, le Lorem Ipsum n\'est pas simplement du texte aléatoire. Il trouve ses racines dans une oeuvre de la littérature latine classique datant de 45 av. J.-C., le rendant vieux de 2000 ans. Un professeur du Hampden-Sydney College, en Virginie, s\'est intéressé à un des mots latins les plus obscurs, consectetur, extrait d\'un passage du Lorem Ipsum, et en étudiant tous les usages de ce mot dans la littérature classique, découvrit la source incontestable du Lorem Ipsum. Il provient en fait des sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" (Des Suprêmes Biens et des Suprêmes Maux) de Cicéron. Cet ouvrage, très populaire pendant la Renaissance, est un traité sur la théorie de l\'éthique. Les premières lignes du Lorem Ipsum, "Lorem ipsum dolor sit amet...", proviennent de la section 1.10.32. L\'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans leur version originale, accompagnée de la traduction anglaise de H. Rackham (1914).',
      nbAccidentsAvecArretsHorsAccidentTrajet: 0,
      nbAccidentsSansArret: 1,
      nbAccidentsTrajet: 2,
      nbPresqueAccident: 0,
      nbJourArretMaladie: 1,
      detailCongesAbsences: 'Nothing',
      totalJourPresense: 19,
      satisfactionConsultant: 2,
      satisfactionClient: 1,
      pointAmelioration: 'Plusieurs variations de Lorem Ipsum peuvent être trouvées ici ou là, mais la majeure partie d\'entre elles a été altérée par l\'addition d\'humour ou de mots aléatoires',
      activitesRestantes: 'Lorem Ipsum, vous devez être sûr qu\'il n\'y a rien d\'embarrassant caché dans le texte. Tous les générateurs de Lorem Ipsum sur Internet tendent à reproduire le même extrait sans fin, ce qui fait de lipsum.com le seul vrai générateur de Lorem Ipsum. Iil utilise un dictionnaire de plus de 200 mots latins, en combinaison de plusieurs structures de phrases, pour générer un Lorem Ipsum irréprochable. Le Lorem Ipsum ainsi obtenu ne contient aucune répétition, ni ne contient des mots farfelus, ou des touches d\'humour.',
      commentaire: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même',
      consultantSignatureLieuDate: '10 decembre 2017, Lyon',
      consultantSignature: 'I. Balbus',
      responsableEntrepriseSignatureLieuDate: '10 decembre 2017, Lyon',
      responsableEntrepriseSignature: 'N. Veselko',
      responsableClientSignatureLieuDate: '10 decembre 2017, Lyon',
      responsableClientSignature: 'O. Serge',
      consultant: 'Dosip Serge',
      validationStatus: 'pending'
    },
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
    case CRA_CLEAN_STATUS: {
      return {
        ...state,
        creatationStatus: '',
        editionStatus: '',
        deletionStatus: ''
      }
    }
    default:
      return state
  }
}
