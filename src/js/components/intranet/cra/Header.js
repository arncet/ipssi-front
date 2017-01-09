import React from 'react'
import {getPath} from '../../../utils/routes'

const Header = () => (
  <div className='Intranet_page_header'>
    <h1 className='Intranet_page_title'>Comptes rendus d'activités</h1>
    <a className='button button-green' href={getPath('intranet-cra-create')}>Créer</a>
  </div>
)

export default Header
