import React from 'react'
import {getPath} from '../../../utils/routes'
import Link from '../../commons/Link'

const Header = () => (
  <div className='Intranet_page_header'>
    <h1 className='Intranet_page_title'>Comptes rendus d'activités</h1>
    <Link className='button button-green' href={getPath('intranet-cra-create')}>Créer</Link>
  </div>
)

export default Header
