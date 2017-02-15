import React, { Component } from 'react'
import {getRandomString, validateEmail} from '../../../utils/string'

//Components
import InputLabel from '../../InputLabel'
import QuillLabel from '../../QuillLabel'
import Experience from './Experience'
import Formation from './Formation'
import Skill from './Skill'

import ErrorMessage from '../../ErrorMessage'
import WarningMessage from '../../WarningMessage'

class CVForm extends Component {
  constructor(props) {
    super(props)

    const cv = props.cv ? props.cv : CVDefaultValues
    this.state = {cv, errors: ''}
  }

  render () {
    const {title, firstName, lastName, phone, email, address, experiences, formations,
      skills, moreInfos, askForEditionComment, id} = this.state.cv
    const {user} = this.props

    const {errors} = this.state
    const {inputsDisabled} = this.props

    return (
      <div className='Intranet_page_CV CV_create'>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>{id ? title : 'Création d\'un CV'}</h1>
          {inputsDisabled ? this.validationButtons() : this.getCVFormButton()}
          {askForEditionComment ? <WarningMessage message={`Une demande de modification à été demandé : <br/> ${askForEditionComment}`}/> : null}
          {errors ? <ErrorMessage error={errors}/> : null}
        </div>

        <div className='CV_section CV_section_title'>
          <div className='CV_section_title'>Titre du CV : </div>
          <InputLabel value={title} onChange={text => this.setState({cv: {...this.state.cv, title: text}})} className='CV_title' disabled={inputsDisabled}/>
        </div>

        <div className='CV_section CV_section_infos'>
          <div className='CV_section_title'>Informations personnelles : </div>
          <InputLabel label={'Nom'} value={user.lastName || lastName} onChange={text => this.setState({cv: {...this.state.cv, lastName: text}})} className='CV_lastname' disabled={inputsDisabled}/>
          <InputLabel label={'Prénom'} value={user.firstName || firstName} onChange={text => this.setState({cv: {...this.state.cv, firstName: text}})} className='CV_firstname' disabled={inputsDisabled}/>
          <InputLabel label={'Adresses complète'} value={address} onChange={text => this.setState({cv: {...this.state.cv, address: text}})} className='CV_address' disabled={inputsDisabled}/>
          <InputLabel label={'E-mail'} value={user.email || email} onChange={text => this.setState({cv: {...this.state.cv, email: text}})} className='CV_email' disabled={inputsDisabled}/>
          <InputLabel label={'Numéro de téléphone'} value={user.phone || phone} onChange={text => this.setState({cv: {...this.state.cv, phone: text}})} className='CV_phone' disabled={inputsDisabled}/>
        </div>

        <div className='CV_column'>
          <div className='CV_section CV_section_experiences'>
            <div className='CV_section_title'>Experiences professionnelles : </div>
            <button className='button button-green' onClick={() => this.addExperience()}>Ajouter</button>
            {
              Object.values(experiences).length
                ? <ul className='CV_experiences'>
                    {
                      Object.values(experiences).map(exprerience => {
                        return (
                          <Experience
                            exprerience={exprerience}
                            key={exprerience.id}
                            inputsDisabled={inputsDisabled}
                            removeExperience={id => this.removeExperience(id)}
                            onChange={(value, attribute, inputId) => this.setState({cv: {...this.state.cv, experiences: {...this.state.cv.experiences, [inputId]: {...this.state.cv.experiences[inputId], [attribute]: value}}}})}
                          />
                        )
                      })
                    }
                  </ul>
                : null
            }
          </div>

          <div className='CV_section CV_section_skills'>
            <div className='CV_section_title'>Compétences : </div>
            <button className='button button-green' onClick={() => this.addSkill()}>Ajouter</button>
            {
              Object.values(skills).length
                ? <ul className='CV_skills'>
                    {
                      Object.values(skills).map(skill => {
                        return (
                          <Skill
                            skill={skill}
                            key={skill.id}
                            inputsDisabled={inputsDisabled}
                            removeSkill={id => this.removeSkill(id)}
                            onChange={(value, attribute, inputId) => this.setState({cv: {...this.state.cv, skills: {...this.state.cv.skills, [inputId]: {...this.state.cv.skills[inputId], [attribute]: value}}}})}
                          />
                        )
                      })
                    }
                  </ul>
                : null
            }
          </div>
        </div>

        <div className='CV_column'>
          <div className='CV_section CV_section_formations'>
            <div className='CV_section_title'>Formations : </div>
            <button className='button button-green' onClick={() => this.addFormation()}>Ajouter</button>
            {
              Object.values(formations).length
                ? <ul className='CV_formations'>
                    {
                      Object.values(formations).map(formation => {
                        return (
                          <Formation
                            formation={formation}
                            key={formation.id}
                            inputsDisabled={inputsDisabled}
                            removeFormation={id => this.removeFormation(id)}
                            onChange={(value, attribute, inputId) => this.setState({cv: {...this.state.cv, formations: {...this.state.cv.formations, [inputId]: {...this.state.cv.formations[inputId], [attribute]: value}}}})}
                          />
                        )
                      })
                    }
                  </ul>
                : null
            }
          </div>

          <div className='CV_section CV_section_more_infos'>
            <div className='CV_section_title'>Information complémentaires : </div>
            <QuillLabel value={moreInfos} onChange={text => this.setState({cv: {...this.state.cv, moreInfos: text}})} className='CV_more_informations'/>
          </div>
        </div>

        <div className='CV_create_footer'>
          {errors ? <ErrorMessage error={errors}/> : null}
          {inputsDisabled ? null : this.getCVFormButton()}
        </div>
      </div>
    )
  }

  addExperience() {
    const experience = {...experienceModel, id: getRandomString()}
    this.setState({cv: {...this.state.cv, experiences: {...this.state.cv.experiences, [experience.id]: experience}}})
  }

  addFormation() {
    const formation = {...formationModel, id: getRandomString()}
    this.setState({cv: {...this.state.cv, formations: {...this.state.cv.formations, [formation.id]: formation}}})
  }

  addSkill() {
    const skill = {...skillModel, id: getRandomString()}
    this.setState({cv: {...this.state.cv, skills: {...this.state.cv.skills, [skill.id]: skill}}})
  }

  removeExperience(id) {
    const {experiences} = this.state.cv
    const newExperiences = Object.values(experiences).reduce((prev, experience) => {
      return experience.id === id ? prev : {...prev, [experience.id]: experience}
    }, {})

    this.setState({cv: {...this.state.cv, experiences: newExperiences}})
  }

  removeFormation(id) {
    const {formations} = this.state.cv
    const newFormations = Object.values(formations).reduce((prev, formation) => {
      return formation.id === id ? prev : {...prev, [formation.id]: formation}
    }, {})

    this.setState({cv: {...this.state.cv, formations: newFormations}})
  }

  removeSkill(id) {
    const {skills} = this.state.cv
    const newSkills = Object.values(skills).reduce((prev, skill) => {
      return skill.id === id ? prev : {...prev, [skill.id]: skill}
    }, {})

    this.setState({cv: {...this.state.cv, skills: newSkills}})
  }

  validCV(action) {
    const {title, firstName, lastName, email, formations, experiences, skills} = this.state.cv
    const invalidFormations = Object.values(formations).filter(formation => !formation.startDate || !formation.location || !formation.name)
    const invalidExperiences = Object.values(experiences).filter(experience => !experience.startDate || !experience.location || !experience.name)
    const invalidSkills = Object.values(skills).filter(skill => !skill.level || !skill.title)

    let errorsList = ''

    if(!title) errorsList += '<li>Il faut saisir un titre</li>'
    if(!firstName) errorsList += '<li>Il faut saisir votre prénom</li>'
    if(!lastName) errorsList += '<li>Il faut saisir votre nom de famille</li>'
    if(!email || !validateEmail(email)) errorsList += '<li>Il faut saisir une adresse e-mail correcte</li>'
    if(!Object.values(formations).length) errorsList += '<li>Il faut saisir au moins une formation</li>'
    if(invalidFormations.length) {
      const formationsList = invalidFormations.map(formation => `<li>formation ${formation.name || '<i>n°'+(Object.values(formations).findIndex(f => f.id === formation.id)+1)+'</i>'}`)
      errorsList += `<li>Les champs des formations suivantes doivents tous être remplis :<ul>${formationsList}</ul></li>`
    }
    if(invalidExperiences.length) {
      const experiencesList = invalidExperiences.map(exprerience => `<li>exprerience ${exprerience.name || '<i>n°'+(Object.values(experiences).findIndex(exp => exp.id === exprerience.id)+1)+'</i>'}`)
      errorsList += `<li>Les champs des experiences suivantes doivents tous être remplis :<ul>${experiencesList}</ul></li>`
    }
    if(invalidSkills.length) {
      const skillsList = invalidSkills.map(skill => `<li>compétence ${skill.title || '<i>n°'+(Object.values(skills).findIndex(s => s.id === skill.id)+1)+'</i>'}`)
      errorsList += `<li>Les champs des compétences suivantes doivents tous être remplis :<ul>${skillsList}</ul></li>`
    }

    const errors = errorsList ? `Il y a des erreurs : <ul>${errorsList}<ul>` : ''

    if (!errorsList) action(this.state.cv)
    this.setState({errors})
  }

  getCVFormButton() {
    const {id} = this.state.cv
    const {createCV, editCV} = this.props

    return id
      ? <button className='button button-blue Create_CV_button' onClick={() => this.validCV(editCV)}>Sauvegarder</button>
      : <button className='button button-blue Create_CV_button' onClick={() => this.validCV(createCV)}>Créer</button>
  }

  validationButtons() {
    const {id, askForEditionComment} = this.state.cv
    const {validCV, askForEditionCV} = this.props

    return (
      <div>
        <QuillLabel label={'Demander une modification'} value={askForEditionComment} onChange={text => this.setState({askForEditionComment: text})} className='CV_ask_for_edition'/>
        <br/>
        <button className='button button-red Ask_for_edition_CV_button' onClick={() => askForEditionCV(id, askForEditionComment)}>Envoyer la demande de modification</button>
        <button className='button button-green Valid_CV_button' onClick={() => validCV(id)}>Valider</button>
      </div>
    )
  }
}

const CVDefaultValues = {
  title: '',
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  address: '',
  experiences: [],
  formations: [],
  skills: [],
  moreInfos: '',
  askForEditionComment: ''
}

const experienceModel = {
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  location: '',
  name: '',
  description: ''
}

const formationModel = {
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  location: '',
  name: '',
  description: ''
}

const skillModel = {
  title: '',
  level: ''
}

CVForm.defaultProps = {
  inputsDisabled: false
}

export default CVForm
