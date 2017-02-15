import React, { Component } from 'react'

//Components
import InputLabel from '../../InputLabel'

import ErrorMessage from '../../ErrorMessage'

class NDFForm extends Component {
  constructor(props) {
    super(props)

    const ndf = props.ndf ? props.ndf : NDFDefaultValues
    this.state = {ndf, errors: ''}
  }

  render () {
    const {description, location, price, id} = this.state.ndf

    const {errors} = this.state
    const {inputsDisabled} = this.props

    return (
      <div className='Intranet_page_NDF NDF_create'>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>{id ? `Note de frais n° ${id}` : 'Création d\'une note de frais'}</h1>
          {inputsDisabled ? null : this.getNDFFormButton()}
          {errors ? <ErrorMessage error={errors}/> : null}
        </div>

        <div className='NDF_section'>
          <InputLabel value={description} label='Description' onChange={text => this.setState({ndf: {...this.state.ndf, description: text}})} className='NDF_description' disabled={inputsDisabled}/>
          <InputLabel value={location} label='Localité' onChange={text => this.setState({ndf: {...this.state.ndf, location: text}})} className='NDF_location' disabled={inputsDisabled}/>
          <InputLabel value={price} label='Montant TTC' onChange={text => this.setState({ndf: {...this.state.ndf, price: text}})} className='NDF_price' disabled={inputsDisabled}/>
        </div>

        <div className='NDF_create_footer'>
          {errors ? <ErrorMessage error={errors}/> : null}
          {inputsDisabled ? null : this.getNDFFormButton()}
        </div>
      </div>
    )
  }

  validNDF(action) {
    const {description, location, price} = this.state.ndf

    let errorsList = ''

    if(!description) errorsList += '<li>Il faut saisir une description</li>'
    if(!location) errorsList += '<li>Il faut saisir une localité</li>'
    if(!price) errorsList += '<li>Il faut saisir un montant</li>'

    const errors = errorsList ? `Il y a des erreurs : <ul>${errorsList}<ul>` : ''

    if (!errorsList) action(this.state.ndf)
    this.setState({errors})
  }

  getNDFFormButton() {
    const {id} = this.state.ndf
    const {createNDF, editNDF} = this.props

    return id
      ? <button className='button button-blue Create_NDF_button' onClick={() => this.validNDF(editNDF)}>Sauvegarder</button>
      : <button className='button button-blue Create_NDF_button' onClick={() => this.validNDF(createNDF)}>Créer</button>
  }
}

const NDFDefaultValues = {
  description: '',
  location: '',
  price: '',
  date: new Date().getTime()
}

NDFForm.defaultProps = {
  inputsDisabled: false
}

export default NDFForm
