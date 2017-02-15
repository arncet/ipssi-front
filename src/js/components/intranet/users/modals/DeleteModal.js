import React from 'react'
import Modal from '../../../Modal'

const DeleteModal = ({user, close, deleteUser}) => (
  <Modal overWindow={false} onClickOverlay={close} display={true}>
    <div className='Modal_delete'>
      <div className='Modal_header'>
        Supprimer un utilisateur
        <div className='fa fa-times' onClick={() => close()}/>
      </div>
      <div className='Modal_body'>
        {`Voulez-vous vraiment supprimer l'utilisateur : ${user.lastName} ${user.firstName} ?`}
      </div>
      <div className='Modal_footer'>
        <button className='button button-red' onClick={() => deleteUser()}>Supprimer</button>
        <button className='button button-red' onClick={() => close()}>Annuler</button>
      </div>
    </div>
  </Modal>
)

export default DeleteModal
