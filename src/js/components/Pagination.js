import React from 'react'
import times from 'lodash/times'

const Pagination = ({nbPages = 0, page = 0, onChange = () => {}, customClasse = ''}) => {
  return nbPages
    ? <ul className={`${customClasse} Pagination`}>
        {times(nbPages).map(index =>
          <li
            className={`Page ${page === index ? 'Current_page' : ''}`}
            key={index}
            onClick={() => onChange(index)}
          >
            {index + 1}
          </li>
        )}
      </ul>
    : <noscript/>
}

export default Pagination
