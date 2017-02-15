import React, { Component } from 'react'
import {validateEmail, hasLetter, hasNumber, hasSpecialCharacter} from '../../../utils/string'
import {rolesById} from '../../../utils/roles'

//Components
import InputLabel from '../../InputLabel'
import SelectLabel from '../../SelectLabel'

import ErrorMessage from '../../ErrorMessage'

class UsersForm extends Component {
  constructor(props) {
    super(props)

    const user = props.user ? props.user : UserDefaultValues
    this.state = {user, errors: ''}
  }

  render () {
    const {firstName, lastName, email, password, phone, role, id} = this.state.user

    const {errors} = this.state
    const {inputsDisabled} = this.props

    return (
      <div className='Intranet_page_User Users_create'>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>{id ? `${lastName} ${firstName}` : 'Création d\'un utilisateur'}</h1>
          {inputsDisabled ? null : this.getUserFormButton()}
          {errors ? <ErrorMessage error={errors}/> : null}
        </div>

        <div className='Users_section'>
          <InputLabel value={lastName} label='Nom' onChange={text => this.setState({user: {...this.state.user, lastName: text}})} className='User_lastName' disabled={inputsDisabled}/>
          <InputLabel value={firstName} label='Prénom' onChange={text => this.setState({user: {...this.state.user, firstName: text}})} className='User_firstName' disabled={inputsDisabled}/>
          <InputLabel value={email} label='E-mail' onChange={text => this.setState({user: {...this.state.user, email: text}})} className='User_email' disabled={inputsDisabled}/>
          <InputLabel value={phone} label='Téléphone' onChange={text => this.setState({user: {...this.state.user, phone: text}})} className='User_phone' disabled={inputsDisabled} type='number'/>
          {inputsDisabled ? null : <InputLabel value={password} label='Mot de passe' onChange={text => this.setState({user: {...this.state.user, password: text}})} className='User_password' disabled={inputsDisabled} type='password'/>}
          <SelectLabel
            label={'Rôle'}
            onChange={text => this.setState({user: {...this.state.user, role: text}})}
            className='User_role'
            value={role}
            options={Object.keys(rolesById).map(roleId => {
              return {content: rolesById[roleId], value: roleId}
            })}
            disabled={inputsDisabled}
          />
        </div>

        <div className='User_create_footer'>
          {errors ? <ErrorMessage error={errors}/> : null}
          {inputsDisabled ? null : this.getUserFormButton()}
        </div>
      </div>
    )
  }

  validUser(action) {
    const {firstName, lastName, email, password, id} = this.state.user

    let errorsList = ''

    if(!firstName) errorsList += '<li>Il faut saisir un prénom</li>'
    if(!lastName) errorsList += '<li>Il faut saisir un nom de famille</li>'
    if(!email || !validateEmail(email)) errorsList += '<li>Il faut saisir une adresse e-mail correcte</li>'
    if(!id && (!password || password.length < 8 || !hasSpecialCharacter(password) || !hasLetter(password) || !hasNumber(password))) {
      errorsList += '<li>Il faut un mot de passe correct (8 caractères minimin, contenant au moins un caractère alphabétique, un chiffre et un caractère spécial)</li>'
    }

    const errors = errorsList ? `Il y a des erreurs : <ul>${errorsList}<ul>` : ''

    if (!errorsList) action(this.state.user)
    this.setState({errors})
  }

  getUserFormButton() {
    const {id} = this.state.user
    const {createUser, editUser} = this.props

    return id
      ? <button className='button button-blue Create_Users_button' onClick={() => this.validUser(editUser)}>Sauvegarder</button>
      : <button className='button button-blue Create_Users_button' onClick={() => this.validUser(createUser)}>Créer</button>
  }
}

const UserDefaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
  role: 7,
  inscriptionDate: new Date().getTime()
}

UsersForm.defaultProps = {
  inputsDisabled: false
}

export default UsersForm
