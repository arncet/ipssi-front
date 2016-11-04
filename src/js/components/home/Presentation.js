import React from 'react'

const Presentation = ({ presentation, index }) => (
  <li className="Presentation">
    { index % 2 === 0 ? <Picture presentation={ presentation }/> : <PresentationTexts presentation={ presentation }/> }
    { index % 2 === 0 ? <PresentationTexts presentation={ presentation }/> : <Picture presentation={ presentation }/> }
  </li>
)

const Picture = ({ presentation: { picture } }) => <img className="Presentation_picture" src={ picture }/>

const PresentationTexts = ({ presentation: { title, description } }) => (
  <div className="Presentation_texts">
    <h3 className="Presentation_title">{ title }</h3>
    <div className="Presentation_description">{ description }</div>
    <a className="button">En savoir plus</a>
  </div>
)

export default Presentation
