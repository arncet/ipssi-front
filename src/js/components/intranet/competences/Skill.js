import React from 'react'
import InputLabel from '../../InputLabel'

const Skill = ({skill: {id, title, level}, inputsDisabled, removeSkill, onChange}) => (
  <li className='CV_experience'>
    <InputLabel label={'Nom'} value={title} onChange={text => onChange(text, 'title', id)} className='CV_skill_title' disabled={inputsDisabled}/>
    <InputLabel label={'Description'} value={level} onChange={text => onChange(text, 'level', id)} className='CV_skill_level' disabled={inputsDisabled}/>

    <button onClick={() => removeSkill(id)} className='fa fa-trash button button-red'/>
  </li>
)

export default Skill
