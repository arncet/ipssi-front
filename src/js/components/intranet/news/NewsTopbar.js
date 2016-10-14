import React, {Component} from 'react'
import moment from '../../../utils/moment'

const NewsTopbar = () => (
  <div className='News_topbar'>
    <div className='label-and-input'>
      <label htmlFor='news-search' className='label'>Rechercher</label>
      <input type='text' id='news-search' className='input-text input-text-black'/>
    </div>
    <div className='label-and-input'>
      <label className='label'>Filtrer par auteur</label>
      <select className='select select-black'>
        <option>Tous</option>
        <option>Timofey Hameed</option>
      </select>
    </div>
    <div className='label-and-input'>
      <label className='label'>Edition</label>
      <button className='button button-blue'>Modifier</button>
      <button className='button button-red'>Supprimer</button>
      <button className='button button-green'>Rendre visible</button>
      <button className='button button-grey'>Rendre invisible</button>
    </div>
  </div>
)

export default NewsTopbar
