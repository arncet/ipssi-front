import React, {Component} from 'react'
import Modal from '../../../Modal'
import Kronos from 'react-kronos'
import moment from '../../../../utils/moment'

class CreateModal extends Component{
  constructor(props) {
    super(props)

    this.state = {
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString()
    }
  }

  render() {
    const {overWindow, close, display, creationStatus} = this.props
    const {startDate, endDate} = this.state

    return (
      <Modal overWindow={overWindow} onClickOverlay={close} display={display} className='Calendar_modal'>
        <div className='Modal_create'>
          <div className='Modal_header'>
            Créer un evenement
            <div className='fa fa-times' onClick={() => close()}/>
          </div>
          <div className='Modal_body'>
            <div className='Modal_section'>
              <div className='label-and-input'>
                <label htmlFor='create-event-tilte' className='label'>Titre*</label>
                <input type='text' id='create-event-tilte' className='input-text input-text-black Create_event_title'/>
              </div>
              <div className='label-and-input'>
                <label htmlFor='create-event-description' className='label'>Description</label>
                <textarea id='create-event-description' className='textarea Create_event_description'/>
              </div>
              <div className='label-and-input'>
                <label htmlFor='create-event-location' className='label'>Lieu</label>
                <input type='text' id='create-event-location' className='input-text input-text-black Create_event_location'/>
              </div>
            </div>
            <div className='Modal_section'>
              <div className='Label_date'><b>Debut</b></div>
              <div className='label-and-input'>
                <label className='label'>Jour</label>
                <Kronos
                  date={startDate}
                  onChangeDateTime={date => {
                    if (moment(date).isAfter(endDate)) {
                      this.setState({startDate: date, endDate: date})
                    }
                    else this.setState({startDate: date})
                  }}
                />
              </div>
              <div className='label-and-input'>
                <label className='label'>Heure</label>
                <Kronos
                  time={startDate}
                  onChangeDateTime={date => {
                    if (moment(date).isAfter(endDate)) this.setState({startDate: date, endDate: date})
                    else this.setState({startDate: date})
                  }}
                />
              </div>

              <div className='Label_date'><b>Fin</b></div>
              <div className='Input_date_and_time'>
                <div className='label-and-input'>
                  <label className='label'>Jour</label>
                  <Kronos
                    date={endDate}
                    onChangeDateTime={date => {
                      if (moment(date).isBefore(startDate)) this.setState({startDate: date, endDate: date})
                      else this.setState({endDate: date})
                    }}
                  />
                </div>
                <div className='label-and-input'>
                  <label className='label'>Heure</label>
                  <Kronos
                    time={endDate}
                    onChangeDateTime={date => {
                      if (moment(date).isBefore(startDate)) this.setState({startDate: date, endDate: date})
                      else this.setState({endDate: date})
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='Modal_footer'>
            <button className='button button-green' onClick={() => this.createEvent()}>
              {creationStatus === 'pending' ? 'Création en cours ...' : 'Créer'}
            </button>
            <button className='button button-red' onClick={() => close()}>Annuler</button>
          </div>
        </div>
      </Modal>
    )
  }

  createEvent() {
    const summary = document.querySelector('.Create_event_title').value
    const description = document.querySelector('.Create_event_description').value
    const location = document.querySelector('.Create_event_location').value
    const {startDate, endDate} = this.state
    const start = {dateTime: startDate}
    const end = {dateTime: endDate}
    const {createEvent} = this.props
    createEvent({summary, description, location, start, end})
  }
}

export default CreateModal
