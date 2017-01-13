import React from 'react'
import {getPath} from '../../../utils/routes'

const Header = () => (
  <div className='Intranet_page_header'>
    <h1 className='Intranet_page_title'>Offres de poste</h1>
    <a className='button button-green' href={getPath('intranet-offres-de-poste')}>Créer</a>
  </div>
)

export default Header
