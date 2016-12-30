import React from 'react'
import Modal from './Modal'

const ModalError = ({message = 'Une erreur est surevenue, merci de réessayer plus tard.', overWindow = false, close = () => {}, display = true}) => (
  <Modal overWindow={overWindow} onClickOverlay={close} display={display}>
    <div className='Modal_error'>
      <div className='Modal_header'>
        Erreur
        <div className='fa fa-times' onClick={() => close()}/>
      </div>
      <div className='Modal_body'>
        {message}
      </div>
      <div className='Modal_footer'>
        <button className='button button-red' onClick={() => close()}>Fermer</button>
      </div>
    </div>
  </Modal>
)

export default ModalError
