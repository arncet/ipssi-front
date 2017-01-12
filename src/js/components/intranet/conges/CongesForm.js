import React, { Component } from 'react'
import moment from '../../../utils/moment'

//Components
import InputLabel from '../../InputLabel'
import QuillLabel from '../../QuillLabel'
import KronosLabel from '../../KronosLabel'
import ErrorMessage from '../../ErrorMessage'
import WarningMessage from '../../WarningMessage'

class CongesCreate extends Component {
  constructor(props) {
    super(props)

    const conge = props.conge ? props.conge : CongesDefaultValues
    this.state = {conge, errors: ''}
  }

  render () {
    const {firstName, lastName, fonction, interventionLocation, responsable, congesStartDate,
     congesEndDate, congesTotalDays, congesType, location, signature, validationStatus,
     responsableSignatureAndDate, dirigentSignatureAndDate, rejectedComment, author, id} = this.state.conge

    const {errors} = this.state
    const {inputsDisabled} = this.props

    return (
      <div className='Intranet_page_Conges Conges_create'>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>{id ? `Demande de congés : ${author}` : 'Création d\'une demande de congés'}</h1>
          {inputsDisabled ? this.validationButtons() : this.getCongesFormButton()}
          {rejectedComment ? <WarningMessage message={`Demande refusé pour casue : <br/> ${rejectedComment}`}/> : null}
          {errors ? <ErrorMessage error={errors}/> : null}
        </div>

        <div className='Conges_section'>
          <InputLabel label={'Nom'} value={firstName} onChange={text => this.setState({conge: {...this.state.conge, firstName: text}})} className='Conges_firstname' disabled={inputsDisabled}/>
          <InputLabel label={'Prenom'} value={lastName} onChange={text => this.setState({conge: {...this.state.conge, lastName: text}})} className='Conges_lastname' disabled={inputsDisabled}/>
          <InputLabel label={'Fonction'} value={fonction} onChange={text => this.setState({conge: {...this.state.conge, fonction: text}})} className='Conges_function' disabled={inputsDisabled}/>
          <InputLabel label={'Lieu d\'intervention'} value={interventionLocation} onChange={text => this.setState({conge: {...this.state.conge, interventionLocation: text}})} className='Conges_intervention_location' disabled={inputsDisabled}/>
          <InputLabel label={'Responsable hiérarchique'} value={responsable} onChange={text => this.setState({conge: {...this.state.conge, responsable: text}})} className='Conges_responsable' disabled={inputsDisabled}/>
        </div>

        <div className='Conges_section'>
          <KronosLabel label={'Date de début de congés'} value={congesStartDate} onChange={date => this.setState({conge: {...this.state.conge, congesStartDate: date, congesTotalDays: moment(congesEndDate).diff(moment(date), 'days')}})} className='Conges_start_date' disabled={inputsDisabled}/>
          <KronosLabel label={'Date de début de congés'} value={congesEndDate} onChange={date => this.setState({conge: {...this.state.conge, congesEndDate: date, congesTotalDays: moment(date).diff(moment(congesStartDate), 'days')}})} className='Conges_end_date' disabled={inputsDisabled}/>
          <div className='Conges_total_days'>{`Nombre total de jours : ${congesTotalDays}`}</div>
          <InputLabel label={'Type de congés'} value={congesType} className='Conges_type' onChange={text => this.setState({conge: {...this.state.conge, congesType: text}})} disabled={inputsDisabled}/>
        </div>

        <div className='Conges_section'>
          <InputLabel label={'Fait à'} value={location} onChange={text => this.setState({conge: {...this.state.conge, location: text}})} className='Conges_location' disabled={inputsDisabled}/>
          <div className='Conges_created_at'>{`Fait le ${moment().format('LL')}`}</div>
          <InputLabel label={'Signature'} value={signature} onChange={text => this.setState({conge: {...this.state.conge, signature: text}})} className='Conges_signature' disabled={inputsDisabled}/>
        </div>

        <div className='Conges_section'>
          {
            validationStatus && validationStatus !== 'pending'
              ? <div className='Conges_validation_status'>
                  <span className={`fa fa-${validationStatus === 'valid' ? 'check' : 'times'}`}/>
                  <span className='Conges_validation_status_text'>{validationStatus === 'valid' ? 'Demande accepté' : 'Demande refusé'}</span>
                </div>
              : null
          }
          {rejectedComment ? <WarningMessage message={`Demande refusé pour casue : <br/> ${rejectedComment}`}/> : null}
          <InputLabel label={'Date et signature du responsable hiérarchique'} value={responsableSignatureAndDate} onChange={text => this.setState({conge: {...this.state.conge, responsableSignatureAndDate: text}})} className='Conges_responsable_signature' disabled={inputsDisabled}/>
          <InputLabel label={'Date et signature du dirigent'} value={dirigentSignatureAndDate} onChange={text => this.setState({conge: {...this.state.conge, dirigentSignatureAndDate: text}})} className='Conges_dirigent_signature' disabled={inputsDisabled}/>
        </div>
      </div>
    )
  }

  validConges(action) {
    const {firstName, lastName, fonction, interventionLocation, responsable, congesStartDate,
     congesEndDate, congesType, location, signature} = this.state.conge

    let errorsList = ''

    if(!firstName) errorsList += '<li>Il faut saisir votre prénom</li>'
    if(!lastName) errorsList += '<li>Il faut saisir votre nom</li>'
    if(!fonction) errorsList += '<li>Il faut saisir votre fonction</li>'
    if(!interventionLocation) errorsList += '<li>Il faut saisir votre lieu d\'intervention</li>'
    if(!responsable) errorsList += '<li>Il faut saisir le nom de votre responsable hiérarchique</li>'
    if(!congesStartDate) errorsList += '<li>Il faut saisir une date de début de congés</li>'
    if(!congesEndDate) errorsList += '<li>Il faut saisir une date de fin de congés</li>'
    if(!congesType) errorsList += '<li>Il faut saisir un type de congés (CP, CSS ...)</li>'
    if(!location) errorsList += '<li>Il faut saisir le lieu ou la demande est faite</li>'
    if(!signature) errorsList += '<li>Il faut saisir votre signature</li>'

    const errors = errorsList ? `Il y a des erreurs : <ul>${errorsList}<ul>` : ''

    if (!errorsList) action(this.state.conge)
    this.setState({errors})
  }

  getCongesFormButton() {
    const {id} = this.state.conge
    const {createConges, editConges} = this.props

    return id
      ? <button className='button button-blue Create_Conges_button' onClick={() => this.validConges(editConges)}>Sauvegarder</button>
      : <button className='button button-blue Create_Conges_button' onClick={() => this.validConges(createConges)}>Créer</button>
  }

  validationButtons() {
    const {id, rejectedComment} = this.state.conge
    const {validConges} = this.props

    return (
      <div>
        <QuillLabel label={'Expliquer la raison du refus.'} value={rejectedComment} onChange={text => this.setState({conges: {...this.state.conges, rejectedComment: text}})} className='Conges_ask_for_edition'/>
        <button className='button button-red Reject_comment_conges_button' onClick={() => validConges(id, false, rejectedComment)}>Refuser</button>
        <button className='button button-green Valid_Conges_button' onClick={() => validConges(id, true)}>Accepter</button>
      </div>
    )
  }
}

const CongesDefaultValues = {
  firstName: '',
  lastName: '',
  fonction: '',
  interventionLocation: '',
  responsable: '',
  congesStartDate: new Date().toISOString(),
  congesEndDate: new Date().toISOString(),
  congesTotalDays: 0,
  congesType: '',
  location: '',
  signature: '',
  validationStatus: '',
  responsableSignatureAndDate: '',
  dirigentSignatureAndDate: '',
  rejectedComment: '',
  author: ''
}

CongesCreate.defaultProps = {
  inputsDisabled: false
}

export default CongesCreate
