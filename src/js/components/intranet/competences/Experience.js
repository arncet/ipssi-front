import React, { Component } from 'react'

//Component
import InputLabel from '../../InputLabel'
import KronosLabel from '../../KronosLabel'

class Experience extends Component {
  constructor(props) {
    super(props)
    this.state = {hastEndDate: true}
  }

  render () {
    const {exprerience: {id, startDate, endDate, location, name, description}, inputsDisabled, removeExperience, onChange} = this.props
    const {hastEndDate} = this.state

    return (
      <li className='CV_experience'>
        <InputLabel label={'Nom'} value={name} onChange={text => onChange(text, 'name', id)} className='CV_experience_name' disabled={inputsDisabled}/>
        <InputLabel label={'Description'} value={description} onChange={text => onChange(text, 'description', id)} className='CV_experience_description' disabled={inputsDisabled}/>
        <InputLabel label={'Établissement'} value={location} onChange={text => onChange(text, 'location', id)} className='CV_experience_location' disabled={inputsDisabled}/>

        <KronosLabel label={'Date de début'} value={startDate} onChange={text => onChange(text, 'startDate', id)} className='CV_experience_startDate' disabled={inputsDisabled}/>

        <div className='Kronos_label_and_checkbox'>
          {hastEndDate ? <KronosLabel label={'Date de fin'} value={endDate || new Date().toISOString()} onChange={text => onChange(text, 'endDate', id)} className='CV_experience_endDate' disabled={inputsDisabled}/> : null}
          <div className='checkbox'>
            <input type='checkbox' checked={!hastEndDate} readOnly/>
            <label className='Kronos_label_and_checkbox_checkbox' onClick={() => {
              onChange(0, 'endDate', id)
              this.setState({hastEndDate: !hastEndDate})}
            }/>
          </div>
          <label className='Kronos_label_and_checkbox_label'>Jusqu'a présent</label>
        </div>

        <button onClick={() => removeExperience(id)} className='fa fa-trash button button-red'/>
      </li>
    )
  }
}

export default Experience
