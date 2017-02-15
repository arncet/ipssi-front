import React from 'react'

//Components
import Header from './Header'
import CandidaturesList from './CandidaturesList'

const Candidatures = ({candidatures, jobs, users, cvs, openDeleteCandidaturesModal, closeDeleteCandidaturesModal, candidatureToDelete, deleteCandidature, validCandidature, unValidCandidature}) => (
  <div className='Intranet_page Intranet_page_Candidatures'>
    <Header/>
    <CandidaturesList
      candidatures={candidatures}
      jobs={jobs}
      users={users}
      cvs={cvs}
      openDeleteCandidaturesModal={openDeleteCandidaturesModal}
      closeDeleteCandidaturesModal={closeDeleteCandidaturesModal}
      candidatureToDelete={candidatureToDelete}
      deleteCandidature={deleteCandidature}
      validCandidature={validCandidature}
      unValidCandidature={unValidCandidature}
    />
  </div>
)

export default Candidatures
