import React, { Component } from 'react'

//Components
import InputLabel from '../../InputLabel'
import QuillLabel from '../../QuillLabel'
import SelectLabel from '../../SelectLabel'
import KronosLabel from '../../KronosLabel'

import ErrorMessage from '../../ErrorMessage'
import WarningMessage from '../../WarningMessage'

class JobsForm extends Component {
  constructor(props) {
    super(props)

    const job = props.job ? props.job : JobsDefaultValues
    this.state = {job, errors: ''}
  }

  render () {
    const {nomClient, periodeStart ,periodeEnd, projet, responsableClient,
      responsableClientContact, responsableClientFonction, responsableEntreprise,
      responsableEntrepriseContact, responsableEntrepriseFonction, collaborateurEntreprise,
      collaborateurEntrepriseContact, collaborateurEntrepriseFonction, rapport,
      nbAccidentsAvecArretsHorsAccidentTrajet, nbAccidentsSansArret, nbAccidentsTrajet,
      nbPresqueAccident, nbJourArretMaladie, detailCongesAbsences, totalJourPresense,
      satisfactionConsultant, satisfactionClient, pointAmelioration, activitesRestantes,
      commentaire, consultantSignatureLieuDate, consultantSignature, responsableEntrepriseSignatureLieuDate,
      responsableEntrepriseSignature, responsableClientSignatureLieuDate, responsableClientSignature,
      askForEditionComment, id} = this.state.job

    const {errors} = this.state
    const {inputsDisabled} = this.props

    return (
      <div className='Intranet_page_Jobs Jobs_create'>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>{id ? `Compte rendu d\'activité : ${projet}` : 'Création de compte rendu d\'activité'}</h1>
          <div className='Jobs_author'>par A. Lol</div>
          {inputsDisabled ? this.validationButtons() : this.getJobsFormButton()}
          {askForEditionComment ? <WarningMessage message={`Une demande de modification à été demandé : <br/> ${askForEditionComment}`}/> : null}
          {errors ? <ErrorMessage error={errors}/> : null}
        </div>
        <div className='Jobs_section'>
          <InputLabel label={'Client'} value={nomClient} onChange={text => this.setState({job: {...this.state.job, nomClient: text}})} className='Jobs_nom_client' disabled={inputsDisabled}/>
          <InputLabel label={'Projet'} value={projet} onChange={text => this.setState({job: {...this.state.job, projet: text}})} className='Jobs_projet' disabled={inputsDisabled}/>

          <KronosLabel label={'Date de début de période'} value={periodeStart} onChange={text => this.setState({job: {...this.state.job, periodeStart: text}})} className='Jobs_start_date' disabled={inputsDisabled}/>
          <KronosLabel label={'Date de début de période'} value={periodeEnd} onChange={text => this.setState({job: {...this.state.job, periodeEnd: text}})} className='Jobs_end_date' disabled={inputsDisabled}/>

          <InputLabel label={'Responsable client'} value={responsableClient} onChange={text => this.setState({job: {...this.state.job, responsableClient: text}})} className='Responsable_client' disabled={inputsDisabled}/>
          <InputLabel label={'Fonction'} value={responsableClientFonction} onChange={text => this.setState({job: {...this.state.job, responsableClientFonction: text}})} className='Responsable_client_fonction' disabled={inputsDisabled}/>
          <InputLabel label={'Contact (n° et/ou e-mail)'} value={responsableClientContact} onChange={text => this.setState({job: {...this.state.job, responsableClientContact: text}})} className='Responsable_client_contact' disabled={inputsDisabled}/>

          <InputLabel label={'Responsable entreprise'} value={responsableEntreprise} onChange={text => this.setState({job: {...this.state.job, responsableEntreprise: text}})} className='Responsable_entreprise' disabled={inputsDisabled}/>
          <InputLabel label={'Fonction'} value={responsableEntrepriseFonction} onChange={text => this.setState({job: {...this.state.job, responsableEntrepriseFonction: text}})} className='Responsable_entreprise_fonction' disabled={inputsDisabled}/>
          <InputLabel label={'Contact (n° et/ou e-mail)'} value={responsableEntrepriseContact} onChange={text => this.setState({job: {...this.state.job, responsableEntrepriseContact: text}})} className='Responsable_entreprise_contact' disabled={inputsDisabled}/>

          <InputLabel label={'Collaborateur'} value={collaborateurEntreprise} onChange={text => this.setState({job: {...this.state.job, collaborateurEntreprise: text}})} className='Collaborateur_entreprise' disabled={inputsDisabled}/>
          <InputLabel label={'Fonction'} value={collaborateurEntrepriseFonction} onChange={text => this.setState({job: {...this.state.job, collaborateurEntrepriseFonction: text}})} className='Collaborateur_entreprise_fonction' disabled={inputsDisabled}/>
          <InputLabel label={'Contact (n° et/ou e-mail)'} value={collaborateurEntrepriseContact} onChange={text => this.setState({job: {...this.state.job, collaborateurEntrepriseContact: text}})} className='Collaborateur_entreprise_contact' disabled={inputsDisabled}/>
        </div>

        <div className='Jobs_section'>
          <QuillLabel label={'Rapport d\'activité de la periode'} value={rapport} onChange={text => this.setState({job: {...this.state.job, rapport: text}})} className='Jobs_rapport_activite' disabled={inputsDisabled}/>
          <InputLabel label={'Nombre d\'accidents avec arrets hors accidents de trajet'} type='number' value={nbAccidentsAvecArretsHorsAccidentTrajet} onChange={text => this.setState({job: {...this.state.job, nbAccidentsAvecArretsHorsAccidentTrajet: text}})} className='Jobs_nb_accident_arret_hors_trajet' disabled={inputsDisabled}/>
          <InputLabel label={'Nombre d\'accidents sans arret'} type='number' value={nbAccidentsSansArret} onChange={text => this.setState({job: {...this.state.job, nbAccidentsSansArret: text}})} className='Jobs_nb_accident_sans_arret' disabled={inputsDisabled}/>
          <InputLabel label={'Nombre d\'accidents de trajet'} type='number' value={nbAccidentsTrajet} onChange={text => this.setState({job: {...this.state.job, nbAccidentsTrajet: text}})} className='Jobs_nb_accident_trajet' disabled={inputsDisabled}/>
          <InputLabel label={'Nombre de presque accident'} type='number' value={nbPresqueAccident} onChange={text => this.setState({job: {...this.state.job, nbPresqueAccident: text}})} className='Jobs_nb_presque_accident' disabled={inputsDisabled}/>
          <InputLabel label={'Nombre de jours d\'arret maladie'} type='number' value={nbJourArretMaladie} onChange={text => this.setState({job: {...this.state.job, nbJourArretMaladie: text}})} className='Jobs_nb_jour_arret_maladie' disabled={inputsDisabled}/>
        </div>

        <div className='Jobs_section'>
          <QuillLabel label={'Préciser les dates de congés ou d\'absence de la période'} value={detailCongesAbsences} onChange={text => this.setState({job: {...this.state.job, detailCongesAbsences: text}})} className='Jobs_detail_conges_absence' disabled={inputsDisabled}/>
          <InputLabel label={'Sois un nombre de jour de présence de'} type='number' value={totalJourPresense} onChange={text => this.setState({job: {...this.state.job, totalJourPresense: text}})} className='Jobs_nb_jour_presence' disabled={inputsDisabled}/>
        </div>

        <div className='Jobs_section'>
          <SelectLabel
            label={'Satisfaction du consultant (avancement, qualité, respect des délais)'}
            onChange={text => this.setState({job: {...this.state.job, satisfactionConsultant: text}})}
            className='Jobs_satisfaction_consultant'
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
            onChange={text => this.setState({job: {...this.state.job, satisfactionClient: text}})}
            className='Jobs_satisfaction_client'
            value={satisfactionClient}
            options={[
              {content: 'Très satisfesant', value: 0},
              {content: 'Satisfesant', value: 1},
              {content: 'À revoir', value: 2},
              {content: 'Insatisfesant', value: 3}
            ]}
            disabled={inputsDisabled}
          />
          <QuillLabel label={'Point d\'amélioration'} value={pointAmelioration} onChange={text => this.setState({job: {...this.state.job, pointAmelioration: text}})} className='Jobs_amelioration' disabled={inputsDisabled}/>
          <QuillLabel label={'Activités restantes à effectuer'} value={activitesRestantes} onChange={text => this.setState({job: {...this.state.job, activitesRestantes: text}})} className='Jobs_amelioration_a_effectuer' disabled={inputsDisabled}/>
          <QuillLabel label={'Commentaire'} value={commentaire} onChange={text => this.setState({job: {...this.state.job, commentaire: text}})} className='Jobs_commentaire' disabled={inputsDisabled}/>
        </div>

        <div className='Jobs_section'>
          <InputLabel label={'Singature consultant'} value={consultantSignature} onChange={text => this.setState({job: {...this.state.job, consultantSignature: text}})} className='Jobs_signature_consultant' disabled={inputsDisabled}/>
          <InputLabel label={'Lieu et date'} value={consultantSignatureLieuDate} onChange={text => this.setState({job: {...this.state.job, consultantSignatureLieuDate: text}})} className='Jobs_signature_consultant_lieu_date' disabled={inputsDisabled}/>

          <InputLabel label={'Singature responsable entreprise'} value={responsableEntrepriseSignature} onChange={text => this.setState({job: {...this.state.job, responsableEntrepriseSignature: text}})} className='Jobs_signature_responsable_entreprise' disabled={inputsDisabled}/>
          <InputLabel label={'Lieu et date'} value={responsableEntrepriseSignatureLieuDate} onChange={text => this.setState({job: {...this.state.job, responsableEntrepriseSignatureLieuDate: text}})} className='Jobs_signature_responsable_entreprise_lieu_date' disabled={inputsDisabled}/>

          <InputLabel label={'Singature responsable client'} value={responsableClientSignature} onChange={text => this.setState({job: {...this.state.job, responsableClientSignature: text}})} className='Jobs_signature_responsable_client' disabled={inputsDisabled}/>
          <InputLabel label={'Lieu et date'} value={responsableClientSignatureLieuDate} onChange={text => this.setState({job: {...this.state.job, responsableClientSignatureLieuDate: text}})} className='Jobs_signature_responsable_client_lieu_date' disabled={inputsDisabled}/>
        </div>

        <div className='Jobs_create_footer'>
          {errors ? <ErrorMessage error={errors}/> : null}
          {inputsDisabled ? null : this.getJobsFormButton()}
        </div>
      </div>
    )
  }

  validJobs(action) {
    const {nomClient, projet, responsableClient,
      responsableClientContact, responsableClientFonction, responsableEntreprise,
      responsableEntrepriseContact, responsableEntrepriseFonction, collaborateurEntreprise,
      collaborateurEntrepriseContact, collaborateurEntrepriseFonction, rapport,
      nbAccidentsAvecArretsHorsAccidentTrajet, nbAccidentsSansArret, nbAccidentsTrajet,
      nbPresqueAccident, nbJourArretMaladie} = this.state.job

    let errorsList = ''

    if(!nomClient) errorsList += '<li>Il faut saisir un nom de client</li>'
    if(!projet) errorsList += '<li>Il faut saisir un nom de projet</li>'

    if(!responsableClient) errorsList += '<li>Il faut saisir un nom de responsable client</li>'
    if(!responsableClientContact) errorsList += '<li>Il faut numéro de telephone ou une adresse email pour le responsable client</li>'
    if(!responsableClientFonction) errorsList += '<li>Il faut saisir la fonction du responsable client</li>'

    if(!responsableEntreprise) errorsList += '<li>Il faut saisir un nom de responsable entreprise</li>'
    if(!responsableEntrepriseContact) errorsList += '<li>Il faut numéro de telephone ou une adresse email pour le responsable entreprise</li>'
    if(!responsableEntrepriseFonction) errorsList += '<li>Il faut saisir la fonction du responsable entreprise</li>'

    if(!collaborateurEntreprise) errorsList += '<li>Il faut saisir un nom de collaborateur entreprise</li>'
    if(!collaborateurEntrepriseContact) errorsList += '<li>Il faut numéro de telephone ou une adresse email pour le collaborateur entreprise</li>'
    if(!collaborateurEntrepriseFonction) errorsList += '<li>Il faut saisir la fonction du collaborateur entreprise</li>'

    if(!rapport) errorsList += '<li>Il faut saisir le contenu du rapport</li>'

    if(nbAccidentsAvecArretsHorsAccidentTrajet === '') errorsList += '<li>Il faut saisir le nombre d\'accident hors accident de trajet</li>'
    if(nbAccidentsSansArret === '') errorsList += '<li>Il faut saisir le nombre d\'accident sans arret</li>'
    if(nbAccidentsTrajet === '') errorsList += '<li>Il faut saisir le nombre d\'accident de trajet</li>'
    if(nbPresqueAccident === '') errorsList += '<li>Il faut saisir le nombre de presque accident</li>'
    if(nbJourArretMaladie === '') errorsList += '<li>Il faut saisir le nombre de jour d\'arret maladie</li>'

    const errors = errorsList ? `Il y a des erreurs : <ul>${errorsList}<ul>` : ''

    if (!errorsList) action(this.state.job)
    this.setState({errors})
  }

  getJobsFormButton() {
    const {id} = this.state.job
    const {createJobs, editJobs} = this.props

    return id
      ? <button className='button button-blue Create_Jobs_button' onClick={() => this.validJobs(editJobs)}>Sauvegarder</button>
      : <button className='button button-blue Create_Jobs_button' onClick={() => this.validJobs(createJobs)}>Créer</button>
  }

  validationButtons() {
    const {id, askForEditionComment} = this.state.job
    const {validJobs, askForEditionJobs} = this.props

    return (
      <div>
        <QuillLabel label={'Demander une modification'} value={askForEditionComment} onChange={text => this.setState({job: {...this.state.job, askForEditionComment: text}})} className='Jobs_ask_for_edition'/>
        <br/>
        <button className='button button-red Ask_for_edition_Jobs_button' onClick={() => askForEditionJobs(id, askForEditionComment)}>Envoyer la demande de modification</button>
        <button className='button button-green Valid_Jobs_button' onClick={() => validJobs(id)}>Valider</button>
      </div>
    )
  }
}

const JobsDefaultValues = {
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
  collaborateurEntreprise: '',
  collaborateurEntrepriseFonction: '',
  collaborateurEntrepriseContact: '',
  rapport: '',
  nbAccidentsAvecArretsHorsAccidentTrajet: 0,
  nbAccidentsSansArret: 0,
  nbAccidentsTrajet: 0,
  nbPresqueAccident: 0,
  nbJourArretMaladie: 0,
  detailCongesAbsences: '',
  totalJourPresense: 0,
  satisfactionConsultant: 0,
  satisfactionClient: 0,
  pointAmelioration: '',
  activitesRestantes: '',
  commentaire: '',
  consultantSignatureLieuDate: '',
  consultantSignature: '',
  responsableEntrepriseSignatureLieuDate: '',
  responsableEntrepriseSignature: '',
  responsableClientSignatureLieuDate: '',
  responsableClientSignature: '',
  askForEditionComment: ''
}

JobsForm.defaultProps = {
  inputsDisabled: false
}

export default JobsForm
