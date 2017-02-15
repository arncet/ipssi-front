import React from 'react'
import moment from '../../utils/moment'

const Job = ({job, postulate, me, openConnexionModal, hasAlreadyPostulate}) => (
  <div className='Job_page Job'>
    <h1 className='Job_title'>{job.title}</h1>
    <div className='Job_description'>{job.description}</div>
    <div className='Job_date'>{`Mise en ligne le ${moment(job.date).format('LL')}, ${moment(job.date).fromNow()}.`}</div>
    {job.avaliable
      ?
        me
          ?
            hasAlreadyPostulate
              ? <i className='Already_postulate' onClick={() => postulate()}>Vous avez déjà postuler à cette offre.</i>
              : <button className='button button-blue Button_postulate' onClick={() => postulate()}>Postuler</button>
          : <button className='button button-blue Button_postulate' onClick={() => openConnexionModal()}>Se connecter pour postuler</button>
      : <button className='button button-grey Button_postulate_disabled' disabled={true}>Offre plus disponible</button>
    }
  </div>
)

export default Job
