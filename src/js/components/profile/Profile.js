import React, { Component } from 'react'
import {roleIdToText} from '../../utils/roles'
import {validateEmail, hasLetter, hasNumber, hasSpecialCharacter} from '../../utils/string'
import {getUserAvatar} from '../../utils/users'
import {getPath} from '../../utils/routes'
import Link from '../commons/Link'

//Components
import InputLabel from '../InputLabel'
import ImagePreview from '../ImagePreview'
import ErrorMessage from '../ErrorMessage'
import CandidatureList from './CandidatureList'
import CRAList from './CRAList'
import CongesList from './CongesList'
import NewsList from './NewsList'
import DeleteAccountModal from './DeleteAccountModal'

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {user: props.user, errors: '', editable: false, deleteAcocuntModal: false}
  }

  render () {
    const {firstName, lastName, email, phone, role} = this.state.user
    const {errors, editable, deleteAcocuntModal} = this.state
    const {cv, candidatures, jobs, cras, conges, allNews, deleteAccount} = this.props

    return (
      <div className='Profile'>
        <DeleteAccountModal isOpen={deleteAcocuntModal} close={() => this.toggleDeleteAccountModal()} deleteAccount={deleteAccount}/>
        <div className='Profile_header'>
          <img className='Profile_avatar' src={getUserAvatar(this.state.user)}/>
          <h1 className='Profile_title'>{`Profil de ${lastName} ${firstName}`}</h1>
          <span className='Profile_user_role'>{roleIdToText(role)}</span>
          <br/>
          {this.getHeaderButtons()}
          {errors ? <ErrorMessage error={errors}/> : null}
        </div>
        <div className='Profile_body'>
          <div className='Profile_user_infos_wrapper'>
            <div className={`Profile_section ${editable ? 'Profile_section_infos' : ''}`}>
              <InputLabel value={lastName} label='Nom' onChange={text => this.setState({user: {...this.state.user, lastName: text}})} className='Profile_user_lastName' disabled={!editable} displayInputWhenDisabled={true}/>
              <InputLabel value={firstName} label='Prénom' onChange={text => this.setState({user: {...this.state.user, firstName: text}})} className='Profile_user_firstName' disabled={!editable} displayInputWhenDisabled={true}/>
              <InputLabel value={email} label='E-mail' onChange={text => this.setState({user: {...this.state.user, email: text}})} className='Profile_user_email' disabled={!editable} displayInputWhenDisabled={true}/>
              <InputLabel value={phone || '/'} label='Téléphone' onChange={text => this.setState({user: {...this.state.user, phone: text}})} className='Profile_user_phone' disabled={!editable} type='number' displayInputWhenDisabled={true}/>
              {editable ? <InputLabel label='Mot de passe' onChange={text => this.setState({user: {...this.state.user, password: text}})} className='Profile_user_password' disabled={!editable} type='password' displayInputWhenDisabled={true}/> : null}
              {cv
                ? <Link className='Profile_user_cv' href={getPath('intranet-cvtheque-id', {id: cv.id})}><button className='button button-green'>Voir le CV</button></Link>
                : <Link className='button button-green' href={getPath('intranet-cvtheque-create')}>Créer mon CV</Link>}
            </div>
            {editable ? <div className='Profile_section Profile_section_avatar'><ImagePreview label='Image de profil' src={getUserAvatar(this.state.user)} onChange={image => this.setState({user: {...this.state.user, avatar: image}})}/></div> : null}
          </div>
          {
            candidatures.length
              ? <div className='Profile_section'>
                  <div className='Profile_section_title'>Candidatures :</div>
                  <CandidatureList candidatures={candidatures} jobs={jobs}/>
                </div>
              : null
          }
          {
            cras.length
              ? <div className='Profile_section'>
                  <div className='Profile_section_title'>Comptes rendus d'activités rédigés</div>
                  <CRAList cras={cras}/>
                </div>
              : null
          }
          {
            conges.length
              ? <div className='Profile_section'>
                  <div className='Profile_section_title'>Congés demandés :</div>
                  <CongesList conges={conges}/>
                </div>
              : null
          }
          {
            allNews.length
              ? <div className='Profile_section'>
                  <div className='Profile_section_title'>Actualités rédigées :</div>
                  <NewsList allNews={allNews}/>
                </div>
              : null
          }
        </div>
        <div className='Profile_footer'></div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user !== this.props.user) this.setState({user: nextProps.user})
  }

  validUser() {
    const {firstName, lastName, email, password} = this.state.user
    const {saveProfile} = this.props

    let errorsList = ''

    if(!firstName) errorsList += '<li>Il faut saisir un prénom</li>'
    if(!lastName) errorsList += '<li>Il faut saisir un nom de famille</li>'
    if(!email || !validateEmail(email)) errorsList += '<li>Il faut saisir une adresse e-mail correcte</li>'
    if(password && (password.length < 8 || !hasSpecialCharacter(password) || !hasLetter(password) || !hasNumber(password))) {
      errorsList += '<li>Il faut un mot de passe correct (8 caractères minimin, contenant au moins un caractère alphabétique, un chiffre et un caractère spécial)</li>'
    }

    const errors = errorsList ? `Il y a des erreurs : <ul>${errorsList}<ul>` : ''

    if (!errorsList) {
      saveProfile({...this.props.user, ...this.state.user})
      this.setState({editable: false})
    }
    this.setState({errors})
  }

  getHeaderButtons() {
    const {isMyProfile} = this.props

    if (!isMyProfile) return null

    const {editable} = this.state
    const action = editable ? () => this.validUser() : () => this.setState({editable: true})

    return (
      <div className='Profile_actions'>
        <button className='button button-green Profile_edit_button' onClick={action}>{editable ? 'Sauvegarder' :'Modifier le profil'}</button>
        <button className='button button-red Profile_delete_button' onClick={() => this.toggleDeleteAccountModal()}>Supprimer le compte</button>
      </div>
    )
  }

  toggleDeleteAccountModal() {
    this.setState({deleteAcocuntModal: !this.state.deleteAcocuntModal})
  }
}

Profile.defaultProps = {
  editable: false
}

export default Profile
