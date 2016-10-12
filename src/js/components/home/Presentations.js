import React from 'react'

//Components
import Presentation from './Presentation'

const presentations = [
  {
    title: 'See it in action',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing nostrud.Adiam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetuer adipiscing nostrud.',
    picture: 'assets/images/home/3036728-poster-p-1-business-live-action-role-players-blarp-is-a-thing.jpg'
  },
  {
    title: 'Sed ut perspiciatis unde omnis',
    description: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporisUt enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Gos qui ratione voluptatem sequi nesciunt. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporisUt enim ad minima veniam.',
    picture: 'assets/images/home/3048392-poster-p-1-my-coworker-takes-all-the-credit-for-the-work-we-do-together.jpg'
  },
  {
    title: 'At vero eos et accusamus et iusto',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.  Nam libero tempore, cum soluta nobis.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
    picture: 'assets/images/home/Productive-Work-Environments.jpg'
  }
]

const Presentations = () => (
  <ul className="Presentations">
    <h2 className="Presentations_title">IPSSI c'est aussi ...</h2>
    { presentations.map((presentation, i) => <Presentation presentation={ presentation } key={ i } index={ i }/>) }
  </ul>
)

export default Presentations
