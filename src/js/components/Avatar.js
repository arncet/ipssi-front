import React from 'react'
import {getPath, inRoute} from '../utils/routes'
import {getUserAvatar} from '../utils/users'
import Link from './commons/Link'

//Components
import ConnexionModal from './ConnexionModal'

const Avatar = ({me, openConnexionModal, closeConnexionModal, connexionModalIsOpen, connexion, connexionStatus, connexionError}) => {
  const avatar = me
    ? <Link className={`User_avatar_wrapper ${inRoute('profil') ? 'User_avatar_on_profile' : ''}`} href={getPath('profil')}>
        <div className='User_avatar' style={{backgroundImage: `url('${getUserAvatar(me)}')`}}/>
      </Link>
    : <div className='Connexion_button' onClick={() => openConnexionModal()}>
        <span className='fa fa-user'/>
      </div>

  return (
    <div className='Avatar'>
      {connexionModalIsOpen ? <ConnexionModal close={closeConnexionModal} connexion={connexion} connexionStatus={connexionStatus} connexionError={connexionError}/> : null}
      {avatar}
    </div>
  )
}

export default Avatar
