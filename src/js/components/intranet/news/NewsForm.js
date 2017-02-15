import React, { Component } from 'react'

//Components
import InputLabel from '../../InputLabel'
import QuillLabel from '../../QuillLabel'
import SelectLabel from '../../SelectLabel'
import ImagePreview from '../../ImagePreview'

import ErrorMessage from '../../ErrorMessage'
import CustomMessage from '../../CustomMessage'

class NewsForm extends Component {
  constructor(props) {
    super(props)

    const news = props.news ? props.news : NewsDefaultValues
    this.state = {news, errors: ''}
  }

  render () {
    const {title, description, content, header, id, hidden} = this.state.news
    const {user} = this.props

    const {errors} = this.state
    const {inputsDisabled} = this.props

    return (
      <div className='Intranet_page_News News_create'>
        <div className='Intranet_page_header'>
          <h1 className='Intranet_page_title'>{id ? `Actualité : ${title}` : 'Création d\'une actualité de poste'}</h1>
          {id ? <div className='News_author'>par {`${user.lastName[0]}. ${user.firstName}`}</div> : null}
          {inputsDisabled ? null : this.getNewsFormButton()}
          {errors ? <ErrorMessage error={errors}/> : null}
          {
            id
              ? <CustomMessage
                  message={!hidden ? 'Actualité visible' : 'Actualité cachée'}
                  backgroundColor={!hidden ? '#2daa66' : '#a7aba9'}
                  borderColor={!hidden ? '#1d6e42' : '#6d6d6d'}
                />
              : null
          }
        </div>
        <div className='News_section'>
          <InputLabel label={'Titre'} value={title} onChange={text => this.setState({news: {...this.state.news, title: text}})} className='News_title' disabled={inputsDisabled}/>
          <InputLabel label={'Description'} value={description} onChange={text => this.setState({news: {...this.state.news, description: text}})} className='News_description' disabled={inputsDisabled}/>
          <ImagePreview src={header} label='Image de couverture' onChange={image => this.setState({news: {...this.state.news, header: image}})} disabled={inputsDisabled}/>
          <QuillLabel label={'Contenu'} value={content} onChange={text => this.setState({news: {...this.state.news, content: text}})} className='News_content' disabled={inputsDisabled}/>
          <SelectLabel
            label={'Visible'}
            onChange={text => this.setState({news: {...this.state.news, hidden: text === 'true' ? true : false}})}
            className='CRA_satisfaction_consultant'
            value={hidden}
            options={[
              {content: 'Oui', value: false},
              {content: 'Non', value: true}
            ]}
            disabled={inputsDisabled}
          />
        </div>

        <div className='News_create_footer'>
          {errors ? <ErrorMessage error={errors}/> : null}
          {inputsDisabled ? null : this.getNewsFormButton()}
        </div>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.news !== this.props.news) this.setState({news: nextProps.news})
  }

  validNews(action) {
    const {title, description, content} = this.state.news

    let errorsList = ''

    if(!title) errorsList += '<li>Il faut saisir un titre</li>'
    if(!description) errorsList += '<li>Il faut saisir une description</li>'
    if(!content) errorsList += '<li>Il faut saisir un contenu</li>'

    const errors = errorsList ? `Il y a des erreurs : <ul>${errorsList}<ul>` : ''

    if (!errorsList) action(this.state.news)
    this.setState({errors})
  }

  getNewsFormButton() {
    const {id, hidden} = this.state.news
    const {createNews, editNews, setNewsVisible} = this.props

    const saveOrCreateButton =  id
      ? <button className='button button-blue Save_News_button' onClick={() => this.validNews(editNews)}>Sauvegarder</button>
      : <button className='button button-blue Create_News_button' onClick={() => this.validNews(createNews)}>Créer</button>

    const setAvaliableOrUnsetAvaliableButton = id
      ? hidden
        ? <button className='button button-green Set_avaliavle_News_button' onClick={() => setNewsVisible(id, true)}>Afficher</button>
        : <button className='button button-grey Unset_avaliavle_News_button'onClick={() => setNewsVisible(id, false)}>Cacher</button>
      : null

    return (
      <div>
        {saveOrCreateButton}
        {setAvaliableOrUnsetAvaliableButton}
      </div>
    )
  }
}

const NewsDefaultValues = {
  title: '',
  description: '',
  content: '',
  date: new Date().getTime(),
  header: '',
  hidden: false
}

NewsForm.defaultProps = {
  inputsDisabled: false
}

export default NewsForm
