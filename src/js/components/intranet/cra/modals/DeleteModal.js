import React from 'react'
import Modal from '../../../Modal'

const DeleteModal = ({cra, close, deleteCRA}) => (
  <Modal overWindow={false} onClickOverlay={close} display={true}>
    <div className='Modal_delete'>
      <div className='Modal_header'>
        Supprimer un CRA
        <div className='fa fa-times' onClick={() => close()}/>
      </div>
      <div className='Modal_body'>
        {`Voulez-vous vraiment supprimer le CRA du projet : ${cra.projet} ?`}
      </div>
      <div className='Modal_footer'>
        <button className='button button-red' onClick={() => deleteCRA()}>Supprimer</button>
        <button className='button button-red' onClick={() => close()}>Annuler</button>
      </div>
    </div>
  </Modal>
)

export default DeleteModal
