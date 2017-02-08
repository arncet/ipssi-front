import {HOME_FETCH_SECTIONS, HOME_FETCH_SECTIONS_SUCCESS, HOME_FETCH_SECTIONS_FAILED} from '../actions'

const initialState = {
  sections: {
    1: {
      id: 1,
      title: 'See it in action',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing nostrud.Adiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing nostrud.',
      picture: 'assets/images/home/3036728-poster-p-1-business-live-action-role-players-blarp-is-a-thing.jpg'
    },
    2: {
      id: 2,
      title: 'Sed ut perspiciatis unde omnis',
      description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporisUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Gos qui ratione voluptatem sequi nesciunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporisUt enim ad minima veniam.',
      picture: 'assets/images/home/3048392-poster-p-1-my-coworker-takes-all-the-credit-for-the-work-we-do-together.jpg'
    },
    3: {
      id: 3,
      title: 'At vero eos et accusamus et iusto',
      description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.  Nam libero tempore, cum soluta nobis.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
      picture: 'assets/images/home/Productive-Work-Environments.jpg'
    }
  },
  sectionStatus: ''
}

export default function home (state = initialState, {type, payload}) {
  switch (type) {
    case HOME_FETCH_SECTIONS:
      return {
        ...state,
        sectionStatus: 'pending'
      }
    case HOME_FETCH_SECTIONS_SUCCESS:
      return {
        ...state,
        sections: payload.sections.reduce((prev, section) => {
          return {...prev, [section.id]: section}
        }, {}),
        sectionStatus: ''
      }
    case HOME_FETCH_SECTIONS_FAILED:
      return {
        ...state,
        sectionStatus: 'failed'
      }
    default:
      return state
  }
}
