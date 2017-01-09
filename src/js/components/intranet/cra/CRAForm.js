import React, { Component } from 'react'
import Kronos from 'react-kronos'

//Components
import InputLabel from '../../InputLabel'
import QuillLabel from '../../QuillLabel'
import SelectLabel from '../../SelectLabel'
import ErrorMessage from '../../ErrorMessage'

class CRACreate extends Component {
  constructor(props) {
    super(props)

    const cra = props.cra ? props.cra : CRADefaultValues
    this.state = {cra, errors: ''}
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
      responsableEntrepriseSignature, responsableClientSignatureLieuDate, responsableClientSignature, id} = this.state.cra

    const {errors} = this.state

    return (
      <div className='Intranet_page_CRA CRA_create'>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>Création de compte rendu d'activité</h1>
          {
            id
              ? <button className='button button-blue Create_CRA_button' onClick={() => this.validCRA()}>Editer</button>
              : <button className='button button-blue Create_CRA_button' onClick={() => this.validCRA()}>Créer</button>
          }
          {errors ? <ErrorMessage error={errors}/> : null}
        </div>
        <div className='CRA_section'>
          <InputLabel label={'Client'} value={nomClient} onChange={text => this.setState({cra: {...this.state.cra, nomClient: text}})} className='CRA_nom_client'/>
          <InputLabel label={'Projet'} value={projet} onChange={text => this.setState({cra: {...this.state.cra, projet: text}})} className='CRA_projet'/>

          <div className='label-and-input CRA_start_date'>
            <label className='label'>Date de début de période</label>
            <Kronos
              date={periodeStart}
              onChangeDateTime={date => this.setState({cra: {...this.state.cra, periodeStart: date}})}
            />
          </div>

          <div className='label-and-input CRA_end_date'>
            <label className='label'>Date de fin de période</label>
            <Kronos
              date={periodeEnd}
              onChangeDateTime={date => this.setState({cra: {...this.state.cra, periodeEnd: date}})}
            />
          </div>

          <InputLabel label={'Responsable client'} value={responsableClient} onChange={text => this.setState({cra: {...this.state.cra, responsableClient: text}})} className='Responsable_client'/>
          <InputLabel label={'Fonction'} value={responsableClientFonction} onChange={text => this.setState({cra: {...this.state.cra, responsableClientFonction: text}})} className='Responsable_client_fonction'/>
          <InputLabel label={'Contact (n° et/ou e-mail)'} value={responsableClientContact} onChange={text => this.setState({cra: {...this.state.cra, responsableClientContact: text}})} className='Responsable_client_contact'/>

          <InputLabel label={'Responsable entreprise'} value={responsableEntreprise} onChange={text => this.setState({cra: {...this.state.cra, responsableEntreprise: text}})} className='Responsable_entreprise'/>
          <InputLabel label={'Fonction'} value={responsableEntrepriseFonction} onChange={text => this.setState({cra: {...this.state.cra, responsableEntrepriseFonction: text}})} className='Responsable_entreprise_fonction'/>
          <InputLabel label={'Contact (n° et/ou e-mail)'} value={responsableEntrepriseContact} onChange={text => this.setState({cra: {...this.state.cra, responsableEntrepriseContact: text}})} className='Responsable_entreprise_contact'/>

          <InputLabel label={'Collaborateur'} value={collaborateurEntreprise} onChange={text => this.setState({cra: {...this.state.cra, collaborateurEntreprise: text}})} className='Collaborateur_entreprise'/>
          <InputLabel label={'Fonction'} value={collaborateurEntrepriseFonction} onChange={text => this.setState({cra: {...this.state.cra, collaborateurEntrepriseFonction: text}})} className='Collaborateur_entreprise_fonction'/>
          <InputLabel label={'Contact (n° et/ou e-mail)'} value={collaborateurEntrepriseContact} onChange={text => this.setState({cra: {...this.state.cra, collaborateurEntrepriseContact: text}})} className='Collaborateur_entreprise_contact'/>
        </div>

        <div className='CRA_section'>
          <QuillLabel label={'Rapport d\'activité de la periode'} value={rapport} onChange={text => this.setState({cra: {...this.state.cra, rapport: text}})} className='CRA_rapport_activite'/>
          <InputLabel label={'Nombre d\'accidents avec arrets hors accidents de trajet'} type='number' value={nbAccidentsAvecArretsHorsAccidentTrajet} onChange={text => this.setState({cra: {...this.state.cra, nbAccidentsAvecArretsHorsAccidentTrajet: text}})} className='CRA_nb_accident_arret_hors_trajet'/>
          <InputLabel label={'Nombre d\'accidents sans arret'} type='number' value={nbAccidentsSansArret} onChange={text => this.setState({cra: {...this.state.cra, nbAccidentsSansArret: text}})} className='CRA_nb_accident_sans_arret'/>
          <InputLabel label={'Nombre d\'accidents de trajet'} type='number' value={nbAccidentsTrajet} onChange={text => this.setState({cra: {...this.state.cra, nbAccidentsTrajet: text}})} className='CRA_nb_accident_trajet'/>
          <InputLabel label={'Nombre de presque accident'} type='number' value={nbPresqueAccident} onChange={text => this.setState({cra: {...this.state.cra, nbPresqueAccident: text}})} className='CRA_nb_presque_accident'/>
          <InputLabel label={'Nombre de jours d\'arret maladie'} type='number' value={nbJourArretMaladie} onChange={text => this.setState({cra: {...this.state.cra, nbJourArretMaladie: text}})} className='CRA_nb_jour_arret_maladie'/>
        </div>

        <div className='CRA_section'>
          <QuillLabel label={'Préciser les dates de congés ou d\'absence de la période'} value={detailCongesAbsences} onChange={text => this.setState({cra: {...this.state.cra, detailCongesAbsences: text}})} className='CRA_detail_conges_absence'/>
          <InputLabel label={'Sois un nombre de jour de présence de'} type='number' value={totalJourPresense} onChange={text => this.setState({cra: {...this.state.cra, totalJourPresense: text}})} className='CRA_nb_jour_presence'/>
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
          />
          <QuillLabel label={'Point d\'amélioration'} value={pointAmelioration} onChange={text => this.setState({cra: {...this.state.cra, pointAmelioration: text}})} className='CRA_amelioration'/>
          <QuillLabel label={'Activités restantes à effectuer'} value={activitesRestantes} onChange={text => this.setState({cra: {...this.state.cra, activitesRestantes: text}})} className='CRA_amelioration_a_effectuer'/>
          <QuillLabel label={'Commentaire'} value={commentaire} onChange={text => this.setState({cra: {...this.state.cra, commentaire: text}})} className='CRA_commentaire'/>
        </div>

        <div className='CRA_section'>
          <InputLabel label={'Singature consultant'} value={consultantSignature} onChange={text => this.setState({cra: {...this.state.cra, consultantSignature: text}})} className='CRA_signature_consultant'/>
          <InputLabel label={'Lieu et date'} value={consultantSignatureLieuDate} onChange={text => this.setState({cra: {...this.state.cra, consultantSignatureLieuDate: text}})} className='CRA_signature_consultant_lieu_date'/>

          <InputLabel label={'Singature responsable entreprise'} value={responsableEntrepriseSignature} onChange={text => this.setState({cra: {...this.state.cra, responsableEntrepriseSignature: text}})} className='CRA_signature_responsable_entreprise'/>
          <InputLabel label={'Lieu et date'} value={responsableEntrepriseSignatureLieuDate} onChange={text => this.setState({cra: {...this.state.cra, responsableEntrepriseSignatureLieuDate: text}})} className='CRA_signature_responsable_entreprise_lieu_date'/>

          <InputLabel label={'Singature responsable client'} value={responsableClientSignature} onChange={text => this.setState({cra: {...this.state.cra, responsableClientSignature: text}})} className='CRA_signature_responsable_client'/>
          <InputLabel label={'Lieu et date'} value={responsableClientSignatureLieuDate} onChange={text => this.setState({cra: {...this.state.cra, responsableClientSignatureLieuDate: text}})} className='CRA_signature_responsable_client_lieu_date'/>
        </div>

        <div className='CRA_create_footer'>
          {errors ? <ErrorMessage error={errors}/> : null}
          {
            id
              ? <button className='button button-blue Create_CRA_button' onClick={() => this.validCRA()}>Editer</button>
              : <button className='button button-blue Create_CRA_button' onClick={() => this.validCRA()}>Créer</button>
          }
        </div>
      </div>
    )
  }

  validCRA() {
    const {nomClient, projet, responsableClient,
      responsableClientContact, responsableClientFonction, responsableEntreprise,
      responsableEntrepriseContact, responsableEntrepriseFonction, collaborateurEntreprise,
      collaborateurEntrepriseContact, collaborateurEntrepriseFonction, rapport,
      nbAccidentsAvecArretsHorsAccidentTrajet, nbAccidentsSansArret, nbAccidentsTrajet,
      nbPresqueAccident, nbJourArretMaladie} = this.state.cra

    const {createCRA, editCRA} = this.props

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

    if (!errorsList && createCRA) createCRA(this.state.cra)
    else if (!errorsList && editCRA) editCRA(this.state.cra)
    this.setState({errors})
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
  responsableClientSignature: ''
}

export default CRACreate
