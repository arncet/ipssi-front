import React from 'react'

//Components
import Slider from './Slider'
import Presentations from './Presentations'
import LookingForAJob from './LookingForAJob'

const Home = ({allNews, sections, jobs}) => (
  <div className="Home">
    <Slider slides={allNews}/>
    <Presentations sections={sections}/>
    <LookingForAJob jobs={jobs}/>
  </div>
)

export default Home
