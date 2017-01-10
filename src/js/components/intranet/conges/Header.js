import React from 'react'
import {getPath} from '../../../utils/routes'

const Header = () => (
  <div className='Intranet_page_header'>
    <h1 className='Intranet_page_title'>Demandes de congés</h1>
    <a className='button button-green' href={getPath('intranet-demandes-de-conges-create')}>Créer</a>
  </div>
)

export default Header
