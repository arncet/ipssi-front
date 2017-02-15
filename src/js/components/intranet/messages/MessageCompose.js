import React, {Component} from 'react'
import ReactQuill from 'react-quill'
import {toolbar} from '../../../config'
import TagsInput from 'react-tagsinput'
import ErrorMessage from '../../ErrorMessage'

import Modal from '../../Modal'

class MessageCompose extends Component{
  constructor(props) {
    super(props)
    this.state = {message: '', emails: [], error: ''}
  }

  render() {
    const {composeModalIsOpen, closeComposeMessageModal} = this.props
    const {message, emails, error} = this.state

    return (
      <Modal onClickOverlay={closeComposeMessageModal} display={composeModalIsOpen} className='Modal_message_compose'>
        <div className='Message_compose'>
          <div className='Pre_input'>
            <div className='Label'>À : </div>
            <TagsInput value={emails} onChange={emails => this.handleChange(emails)} inputProps={{placeholder: ''}} addKeys={[9, 13, 32]}/>
          </div>
          <div className='Pre_input'>
            <div className='Label'>Objet : </div>
            <input type='text' className='input-text Message_compose_object' defaultValue=''/>
          </div>
          <ReactQuill value={message} onChange={text => this.setState({message: text})} theme='snow' toolbar={toolbar}/>
          <div className='Message_compose_footer'>
            <ErrorMessage error={error}/>
            <button className='button button-blue Message_compose_send' onClick={() => this.sendMessage()}>Envoyer</button>
          </div>
        </div>
      </Modal>
    )
  }

  handleChange(emails) {
    this.setState({emails})
  }

  sendMessage() {
    const {message, emails} = this.state
    const {sendMessage} = this.props
    if (!emails.length) {
      this.setState({error: 'Veuillez saisir au moins une adresse email.'})
    } else {
      this.setState({error: ''})
      const obj = document.querySelector('.Message_compose_object').value || ''
      sendMessage(message, obj, emails)
    }
  }
}

export default MessageCompose
