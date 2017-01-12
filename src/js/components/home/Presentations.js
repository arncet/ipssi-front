import React from 'react'

//Components
import Presentation from './Presentation'

const Presentations = ({sections}) => (
  <ul className="Presentations">
    <h2 className="Presentations_title">IPSSI c'est aussi ...</h2>
    {sections.map((presentation, i) => <Presentation presentation={ presentation } key={ i } index={ i }/>)}
  </ul>
)

export default Presentations
