import React, { Component } from 'react'

//Components
import InputLabel from '../../InputLabel'
import QuillLabel from '../../QuillLabel'
import SelectLabel from '../../SelectLabel'
import KronosLabel from '../../KronosLabel'

import ErrorMessage from '../../ErrorMessage'
import WarningMessage from '../../WarningMessage'
import CustomMessage from '../../CustomMessage'

class CRAForm extends Component {
  constructor(props) {
    super(props)

    const cra = props.cra ? props.cra : CRADefaultValues
    this.state = {cra, errors: '', askForEditionComment: ''}
  }

  render () {
    const {nomClient, periodeStart ,periodeEnd, projet, responsableClient,
      responsableClientContact, responsableClientFonction, responsableEntreprise,
      responsableEntrepriseContact, responsableEntrepriseFonction, rapport,
      nbAccidentsAvecArretsHorsAccidentTrajet, nbAccidentsSansArret, nbAccidentsTrajet,
      nbJourArretMaladie, detailCongesAbsences, totalJourPresense,
      satisfactionConsultant, satisfactionClient, pointAmelioration, activitesRestantes,
      commentaire, id} = this.state.cra

    const {errors} = this.state
    const {inputsDisabled, user} = this.props

    return (
      <div className='Intranet_page_CRA CRA_create'>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>{id ? `Compte rendu d\'activité : ${projet}` : 'Création de compte rendu d\'activité'}</h1>
          {id ? <div className='CRA_author'>{`par ${user.lastName} ${user.firstName}`}</div> : null}
          {id ? this.props.cra.validationStatus !== 'valid' ? inputsDisabled ? this.validationButtons() : this.getCRAFormButton() : null : null}
          {id ? this.props.cra.askForEditionComment && this.props.cra.validationStatus !== 'valid' ? <WarningMessage message={`Une demande de modification à été demandé : <br/> ${this.props.cra.askForEditionComment}`}/> : null : null}
          {id ? this.props.cra.validationStatus === 'valid' ? <CustomMessage message='Compte rendu validé' backgroundColor='#2daa66' borderColor='#1d6e42'/> : null : null}
          {errors ? <ErrorMessage error={errors}/> : null}
        </div>
        <div className='CRA_section'>
          <InputLabel label={'Client'} value={nomClient} onChange={text => this.setState({cra: {...this.state.cra, nomClient: text}})} className='CRA_nom_client' disabled={inputsDisabled}/>
          <InputLabel label={'Projet'} value={projet} onChange={text => this.setState({cra: {...this.state.cra, projet: text}})} className='CRA_projet' disabled={inputsDisabled}/>

          <KronosLabel label={'Date de début de période'} value={periodeStart} onChange={text => this.setState({cra: {...this.state.cra, periodeStart: text}})} className='CRA_start_date' disabled={inputsDisabled}/>
          <KronosLabel label={'Date de début de période'} value={periodeEnd} onChange={text => this.setState({cra: {...this.state.cra, periodeEnd: text}})} className='CRA_end_date' disabled={inputsDisabled}/>

          <InputLabel label={'Responsable client'} value={responsableClient} onChange={text => this.setState({cra: {...this.state.cra, responsableClient: text}})} className='Responsable_client' disabled={inputsDisabled}/>
          <InputLabel label={'Fonction'} value={responsableClientFonction} onChange={text => this.setState({cra: {...this.state.cra, responsableClientFonction: text}})} className='Responsable_client_fonction' disabled={inputsDisabled}/>
          <InputLabel label={'Contact (n° et/ou e-mail)'} value={responsableClientContact} onChange={text => this.setState({cra: {...this.state.cra, responsableClientContact: text}})} className='Responsable_client_contact' disabled={inputsDisabled}/>

          <InputLabel label={'Responsable entreprise'} value={responsableEntreprise} onChange={text => this.setState({cra: {...this.state.cra, responsableEntreprise: text}})} className='Responsable_entreprise' disabled={inputsDisabled}/>
          <InputLabel label={'Fonction'} value={responsableEntrepriseFonction} onChange={text => this.setState({cra: {...this.state.cra, responsableEntrepriseFonction: text}})} className='Responsable_entreprise_fonction' disabled={inputsDisabled}/>
          <InputLabel label={'Contact (n° et/ou e-mail)'} value={responsableEntrepriseContact} onChange={text => this.setState({cra: {...this.state.cra, responsableEntrepriseContact: text}})} className='Responsable_entreprise_contact' disabled={inputsDisabled}/>

          {id ? <InputLabel label={'Collaborateur'} value={`${user.firstName} ${user.lastName}`} className='Collaborateur_entreprise' disabled={true}/> : null}
          {id ? <InputLabel label={'Fonction'} value={user.function} className='Collaborateur_entreprise_fonction' disabled={true}/> : null}
          {id ? <InputLabel label={'Contact (n° et/ou e-mail)'} value={user.email} className='Collaborateur_entreprise_contact' disabled={true}/> : null}
        </div>

        <div className='CRA_section'>
          <QuillLabel label={'Rapport d\'activité de la periode'} value={rapport} onChange={text => this.setState({cra: {...this.state.cra, rapport: text}})} className='CRA_rapport_activite' disabled={inputsDisabled}/>
          <InputLabel label={'Nombre d\'accidents avec arrets hors accidents de trajet'} type='number' value={nbAccidentsAvecArretsHorsAccidentTrajet} onChange={text => this.setState({cra: {...this.state.cra, nbAccidentsAvecArretsHorsAccidentTrajet: text}})} className='CRA_nb_accident_arret_hors_trajet' disabled={inputsDisabled}/>
          <InputLabel label={'Nombre d\'accidents sans arret'} type='number' value={nbAccidentsSansArret} onChange={text => this.setState({cra: {...this.state.cra, nbAccidentsSansArret: text}})} className='CRA_nb_accident_sans_arret' disabled={inputsDisabled}/>
          <InputLabel label={'Nombre d\'accidents de trajet'} type='number' value={nbAccidentsTrajet} onChange={text => this.setState({cra: {...this.state.cra, nbAccidentsTrajet: text}})} className='CRA_nb_accident_trajet' disabled={inputsDisabled}/>
          <InputLabel label={'Nombre de jours d\'arret maladie'} type='number' value={nbJourArretMaladie} onChange={text => this.setState({cra: {...this.state.cra, nbJourArretMaladie: text}})} className='CRA_nb_jour_arret_maladie' disabled={inputsDisabled}/>
        </div>

        <div className='CRA_section'>
          <QuillLabel label={'Préciser les dates de congés ou d\'absence de la période'} value={detailCongesAbsences} onChange={text => this.setState({cra: {...this.state.cra, detailCongesAbsences: text}})} className='CRA_detail_conges_absence' disabled={inputsDisabled}/>
          <InputLabel label={'Sois un nombre de jour de présence de'} type='number' value={totalJourPresense} onChange={text => this.setState({cra: {...this.state.cra, totalJourPresense: text}})} className='CRA_nb_jour_presence' disabled={inputsDisabled}/>
        </div>

        <div className='CRA_section'>
          <SelectLabel
            label={'Satisfaction du consultant (avancement, qualité, respect des délais)'}
            onChange={text => this.setState({cra: {...this.state.cra, satisfactionConsultant: text}})}
            className='CRA_satisfaction_consultant'
            value={satisfactionConsultant}
            options={[
              {content: 'Très satisfesant', value: 0},
              {content: 'Satisfesant', value: 1},
              {content: 'À revoir', value: 2},
              {content: 'Insatisfesant', value: 3}
            ]}
            disabled={inputsDisabled}
          />
          <SelectLabel
            label={'Satisfaction du client (avancement, qualité, respect des délais)'}
            onChange={text => this.setState({cra: {...this.state.cra, satisfactionClient: text}})}
            className='CRA_satisfaction_client'
            value={satisfactionClient}
            options={[
              {content: 'Très satisfesant', value: 0},
              {content: 'Satisfesant', value: 1},
              {content: 'À revoir', value: 2},
              {content: 'Insatisfesant', value: 3}
            ]}
            disabled={inputsDisabled}
          />
          <QuillLabel label={'Point d\'amélioration'} value={pointAmelioration} onChange={text => this.setState({cra: {...this.state.cra, pointAmelioration: text}})} className='CRA_amelioration' disabled={inputsDisabled}/>
          <QuillLabel label={'Activités restantes à effectuer'} value={activitesRestantes} onChange={text => this.setState({cra: {...this.state.cra, activitesRestantes: text}})} className='CRA_amelioration_a_effectuer' disabled={inputsDisabled}/>
          <QuillLabel label={'Commentaire'} value={commentaire} onChange={text => this.setState({cra: {...this.state.cra, commentaire: text}})} className='CRA_commentaire' disabled={inputsDisabled}/>
        </div>

        <div className='CRA_create_footer'>
          {errors ? <ErrorMessage error={errors}/> : null}
          {inputsDisabled ? null : this.getCRAFormButton()}
        </div>
      </div>
    )
  }

  validCRA(action) {
    const {nomClient, projet, responsableClient,
      responsableClientContact, responsableClientFonction, responsableEntreprise,
      responsableEntrepriseContact, responsableEntrepriseFonction, rapport,
      nbAccidentsAvecArretsHorsAccidentTrajet, nbAccidentsSansArret, nbAccidentsTrajet,
      nbJourArretMaladie} = this.state.cra

    let errorsList = ''

    if(!nomClient) errorsList += '<li>Il faut saisir un nom de client</li>'
    if(!projet) errorsList += '<li>Il faut saisir un nom de projet</li>'

    if(!responsableClient) errorsList += '<li>Il faut saisir un nom de responsable client</li>'
    if(!responsableClientContact) errorsList += '<li>Il faut numéro de phone ou une adresse email pour le responsable client</li>'
    if(!responsableClientFonction) errorsList += '<li>Il faut saisir la fonction du responsable client</li>'

    if(!responsableEntreprise) errorsList += '<li>Il faut saisir un nom de responsable entreprise</li>'
    if(!responsableEntrepriseContact) errorsList += '<li>Il faut numéro de phone ou une adresse email pour le responsable entreprise</li>'
    if(!responsableEntrepriseFonction) errorsList += '<li>Il faut saisir la fonction du responsable entreprise</li>'

    if(!rapport) errorsList += '<li>Il faut saisir le contenu du rapport</li>'

    if(nbAccidentsAvecArretsHorsAccidentTrajet === '') errorsList += '<li>Il faut saisir le nombre d\'accident hors accident de trajet</li>'
    if(nbAccidentsSansArret === '') errorsList += '<li>Il faut saisir le nombre d\'accident sans arret</li>'
    if(nbAccidentsTrajet === '') errorsList += '<li>Il faut saisir le nombre d\'accident de trajet</li>'
    if(nbJourArretMaladie === '') errorsList += '<li>Il faut saisir le nombre de jour d\'arret maladie</li>'

    const errors = errorsList ? `Il y a des erreurs : <ul>${errorsList}<ul>` : ''

    if (!errorsList) action(this.state.cra)
    this.setState({errors})
  }

  getCRAFormButton() {
    const {id} = this.state.cra
    const {createCRA, editCRA} = this.props

    return id
      ? <button className='button button-blue Create_CRA_button' onClick={() => this.validCRA(editCRA)}>Sauvegarder</button>
      : <button className='button button-blue Create_CRA_button' onClick={() => this.validCRA(createCRA)}>Créer</button>
  }

  validationButtons() {
    const {id} = this.state.cra
    const {askForEditionComment} = this.state
    const {validCRA, askForEditionCRA} = this.props

    return (
      <div>
        <QuillLabel label={'Demander une modification'} value={askForEditionComment} onChange={text => this.setState({askForEditionComment: text})} className='CRA_ask_for_edition'/>
        <br/>
        <button className='button button-red Ask_for_edition_CRA_button' onClick={() => askForEditionCRA(id, askForEditionComment)}>Envoyer la demande de modification</button>
        <button className='button button-green Valid_CRA_button' onClick={() => validCRA(id)}>Valider</button>
      </div>
    )
  }
}

const CRADefaultValues = {
  nomClient: '',
  periodeStart: new Date().toISOString(),
  periodeEnd: new Date().toISOString(),
  projet: '',
  responsableClient: '',
  responsableClientContact: '',
  responsableClientFonction: '',
  responsableEntreprise: '',
  responsableEntrepriseFonction: '',
  responsableEntrepriseContact: '',
  rapport: '',
  nbAccidentsAvecArretsHorsAccidentTrajet: 0,
  nbAccidentsSansArret: 0,
  nbAccidentsTrajet: 0,
  nbJourArretMaladie: 0,
  detailCongesAbsences: '',
  totalJourPresense: 0,
  satisfactionConsultant: 0,
  satisfactionClient: 0,
  pointAmelioration: '',
  activitesRestantes: '',
  commentaire: '',
  askForEditionComment: '',
  validationStatus: 'pending'
}

CRAForm.defaultProps = {
  inputsDisabled: false
}

export default CRAForm
