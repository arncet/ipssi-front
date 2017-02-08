import React from 'react'
import {getPath} from '../../../utils/routes'
import Link from '../../commons/Link'

const Header = () => (
  <div className='Intranet_page_header'>
    <h1 className='Intranet_page_title'>CV</h1>
    <Link className='button button-green' href={getPath('intranet-cvtheque-create')}>Créer</Link>
  </div>
)

export default Header
