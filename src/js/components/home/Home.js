import React from 'react'

//Components
import Slider from './Slider'
import Presentations from './Presentations'
import LookingForAJob from './LookingForAJob'

const Home = () => (
  <div className="Home">
    <Slider/>
    <Presentations/>
    <LookingForAJob/>
  </div>
)

export default Home
