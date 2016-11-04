import React from 'react'

const NewsTopbar = () => (
  <div className='News_topbar'>
    <div className='News_topbar_left'>
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
        <label className='label'>Sélection</label>
        <button className='button button-blue'>Tous séléctionner</button>
        <button className='button button-blue'>Tous déselectionner</button>
      </div>
    </div>
    <div className='News_topbar_right'>
      <div className='label-and-input'>
        <label className='label'>Edition</label>
        <button className='button button-blue'>Modifier</button>
        <button className='button button-red'>Supprimer</button>
        <button className='button button-green'>Rendre visible</button>
        <button className='button button-grey'>Rendre invisible</button>
      </div>
    </div>
  </div>
)

export default NewsTopbar
