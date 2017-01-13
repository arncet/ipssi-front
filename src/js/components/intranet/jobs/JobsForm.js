import React, { Component } from 'react'

//Components
import InputLabel from '../../InputLabel'
import QuillLabel from '../../QuillLabel'

import ErrorMessage from '../../ErrorMessage'
import CustomMessage from '../../CustomMessage'

class JobsForm extends Component {
  constructor(props) {
    super(props)

    const job = props.job ? props.job : JobsDefaultValues
    this.state = {job, errors: ''}
  }

  render () {
    const {title, description, id, avaliable} = this.state.job

    const {errors} = this.state
    const {inputsDisabled} = this.props

    return (
      <div className='Intranet_page_Jobs Jobs_create'>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>{id ? `Offre de poste : ${title}` : 'Création d\'une offre de poste'}</h1>
          {inputsDisabled ? null : this.getJobsFormButton()}
          {errors ? <ErrorMessage error={errors}/> : null}
          {
            id
              ? <CustomMessage
                  message={avaliable ? 'Offre active' : 'Offre inactive'}
                  backgroundColor={avaliable ? '#2daa66' : '#a7aba9'}
                  borderColor={avaliable ? '#1d6e42' : '#6d6d6d'}
                />
              : null
          }
        </div>
        <div className='Jobs_section'>
          <InputLabel label={'Titre'} value={title} onChange={text => this.setState({job: {...this.state.job, title: text}})} className='Jobs_title' disabled={inputsDisabled}/>
          <QuillLabel label={'Description'} value={description} onChange={text => this.setState({job: {...this.state.job, description: text}})} className='Jobs_description' disabled={inputsDisabled}/>
        </div>

        <div className='Jobs_create_footer'>
          {errors ? <ErrorMessage error={errors}/> : null}
          {inputsDisabled ? null : this.getJobsFormButton()}
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.job !== this.props.job) this.setState({job: nextProps.job})
  }

  validJob(action) {
    const {title, description} = this.state.job

    let errorsList = ''

    if(!title) errorsList += '<li>Il faut saisir un titre</li>'
    if(!description) errorsList += '<li>Il faut saisir une description</li>'

    const errors = errorsList ? `Il y a des erreurs : <ul>${errorsList}<ul>` : ''

    if (!errorsList) action(this.state.job)
    this.setState({errors})
  }

  getJobsFormButton() {
    const {id, avaliable} = this.state.job
    const {createJob, editJob, setJobAvaliable} = this.props

    const saveOrCreateButton =  id
      ? <button className='button button-blue Save_Jobs_button' onClick={() => this.validJob(editJob)}>Sauvegarder</button>
      : <button className='button button-blue Create_Jobs_button' onClick={() => this.validJob(createJob)}>Créer</button>

    const setAvaliableOrUnsetAvaliableButton = id
      ? avaliable
        ? <button className='button button-grey Unset_avaliavle_Jobs_button' onClick={() => setJobAvaliable(id, false)}>Désactiver</button>
        : <button className='button button-green Set_avaliavle_Jobs_button' onClick={() => setJobAvaliable(id, true)}>Activer</button>
      : null

    return (
      <div>
        {saveOrCreateButton}
        {setAvaliableOrUnsetAvaliableButton}
      </div>
    )
  }
}

const JobsDefaultValues = {
  title: '',
  description: '',
  date: new Date().getTime(),
  avaliable: true
}

JobsForm.defaultProps = {
  inputsDisabled: false
}

export default JobsForm
