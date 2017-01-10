import React from 'react'
import Modal from '../../../Modal'

const DeleteModal = ({close, deleteConges}) => (
  <Modal overWindow={false} onClickOverlay={close} display={true}>
    <div className='Modal_delete'>
      <div className='Modal_header'>
        Supprimer une demande de congés
        <div className='fa fa-times' onClick={() => close()}/>
      </div>
      <div className='Modal_body'>
        Voulez-vous vraiment supprimer cette demande de congés ?
      </div>
      <div className='Modal_footer'>
        <button className='button button-red' onClick={() => deleteConges()}>Supprimer</button>
        <button className='button button-red' onClick={() => close()}>Annuler</button>
      </div>
    </div>
  </Modal>
)

export default DeleteModal
