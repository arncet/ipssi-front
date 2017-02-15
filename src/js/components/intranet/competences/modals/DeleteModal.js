import React from 'react'
import Modal from '../../../Modal'

const DeleteModal = ({cv, close, deleteCV}) => (
  <Modal overWindow={false} onClickOverlay={close} display={true}>
    <div className='Modal_delete'>
      <div className='Modal_header'>
        Supprimer un CV
        <div className='fa fa-times' onClick={() => close()}/>
      </div>
      <div className='Modal_body'>
        {`Voulez-vous vraiment supprimer le CV : ${cv.title} ?`}
      </div>
      <div className='Modal_footer'>
        <button className='button button-red' onClick={() => deleteCV()}>Supprimer</button>
        <button className='button button-red' onClick={() => close()}>Annuler</button>
      </div>
    </div>
  </Modal>
)

export default DeleteModal
