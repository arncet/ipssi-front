import React, {Component} from 'react'
import {validateEmail} from '../utils/string'
import ErrorMessage from './ErrorMessage'

//Components
import Modal from './Modal'
import InputLabel from './InputLabel'

class ConnexionModal extends Component{
  constructor(props) {
    super(props)
    this.state = {errors: '', email: '', password: ''}
  }

  render() {
    const {close, connexionStatus} = this.props
    const {email, password, errors} = this.state

    return (
      <Modal overWindow={false} onClickOverlay={close} display={true} className='Connexion_modal_wrapper'>
        <div className='Connexion_modal'>
          <div className='Modal_header'>
            Connexion
            <div className='fa fa-times' onClick={() => close()}/>
          </div>
          <div className='Modal_body'>
            {errors ? <ErrorMessage error={errors}/> : null}
            <InputLabel className='Connexion_email_input' label='E-mail' onChange={text => this.setState({email: text})} value={email} name='user_email' autofocus={true}/>
            <InputLabel className='Connexion_password_input' label='Mot de passe' onChange={text => this.setState({password: text})} value={password} name='user_password' type='password'/>
          </div>
          <div className='Modal_footer'>
            <button className='button' onClick={() => this.connexion()} disabled={connexionStatus === 'pending'}>Connexion</button>
            <button className='button' onClick={() => close()}>Annuler</button>
          </div>
        </div>
      </Modal>
    )
  }

  componentWillMount() {
    window.addEventListener('keypress', this.onEnterPress.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.onEnterPress.bind(this))
  }

  onEnterPress(e) {
    const {connexionStatus} = this.props
    const key = e.keyCode || e.which
    if (key === 13 && connexionStatus !== 'pending') this.connexion()
  }

  connexion() {
    let errors = ''
    const {connexion} = this.props
    const {email, password} = this.state

    if (!email || !validateEmail(email)) errors += '<p>Veuillez saisir une adresse e-mail correct.</p>'
    if (!password) errors += '<p>Veuillez saisir un mot de passe.</p>'
    if (!errors) connexion({email, password})

    this.setState({errors})
  }
}

export default ConnexionModal
