import React, {Component} from 'react'
import Modal from '../../../Modal'
import Kronos from 'react-kronos'
import moment from '../../../../utils/moment'

class EditModal extends Component{
  constructor(props) {
    super(props)

    const {summary, description, location, start, end} = this.props.event

    this.state = {startDate: start.dateTime, endDate: end.dateTime, summary, description, location}
  }

  render() {
    const {overWindow, close, editionStatus} = this.props
    const {startDate, endDate, summary, description, location} = this.state

    return (
      <Modal overWindow={overWindow} onClickOverlay={close} display={true} className='Calendar_modal'>
        <div className='Modal_edit'>
          <div className='Modal_header'>
            Editer un evenement
            <div className='fa fa-times' onClick={() => close()}/>
          </div>
          <div className='Modal_body'>
            <div className='Modal_section'>
              <div className='label-and-input'>
                <label htmlFor='create-event-tilte' className='label'>Titre</label>
                <input type='text' id='create-event-tilte' className='input-text input-text-black Create_event_title' value={summary} onChange={e => this.setState({summary: e.target.value})}/>
              </div>
              <div className='label-and-input'>
                <label htmlFor='create-event-description' className='label'>Description</label>
                <textarea id='create-event-description' className='textarea Create_event_description' value={description} onChange={e => this.setState({description: e.target.value})}/>
              </div>
              <div className='label-and-input'>
                <label htmlFor='create-event-location' className='label'>Lieu</label>
                <input type='text' id='create-event-location' className='input-text input-text-black Create_event_location' value={location} onChange={e => this.setState({location: e.target.value})}/>
              </div>
            </div>
            <div className='Modal_section'>
              <div className='Label_date'><b>Debut</b></div>
              <div className='label-and-input'>
                <label className='label'>Jour</label>
                <Kronos
                  date={startDate}
                  onChangeDateTime={date => this.onChangeStartDateTime(date)}
                />
              </div>
              <div className='label-and-input'>
                <label className='label'>Heure</label>
                <Kronos
                  time={startDate}
                  onChangeDateTime={date => this.onChangeStartDateTime(date)}
                />
              </div>

              <div className='Label_date'><b>Fin</b></div>
              <div className='Input_date_and_time'>
                <div className='label-and-input'>
                  <label className='label'>Jour</label>
                  <Kronos
                    date={endDate}
                    onChangeDateTime={date => this.onChangeEndDateTime(date)}
                  />
                </div>
                <div className='label-and-input'>
                  <label className='label'>Heure</label>
                  <Kronos
                    time={endDate}
                    onChangeDateTime={date => this.onChangeEndDateTime(date)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='Modal_footer'>
            <button className='button button-green' onClick={() => this.editEvent()}>
              {editionStatus === 'pending' ? 'Édition en cours ...' : 'Éditer'}
            </button>
            <button className='button button-red' onClick={() => close()}>Annuler</button>
          </div>
        </div>
      </Modal>
    )
  }

  onChangeStartDateTime(date) {
    const {endDate} = this.state
    if (moment(date).isAfter(endDate)) this.setState({startDate: date, endDate: date})
    else this.setState({startDate: date})
  }

  onChangeEndDateTime(date) {
    const {startDate} = this.state
    if (moment(date).isBefore(startDate)) this.setState({startDate: date, endDate: date})
    else this.setState({endDate: date})
  }

  editEvent() {
    const summary = document.querySelector('.Create_event_title').value
    const description = document.querySelector('.Create_event_description').value
    const location = document.querySelector('.Create_event_location').value
    const {editEvent, event} = this.props
    const {startDate, endDate} = this.state
    const start = {...event.start, dateTime: startDate}
    const end = {...event.end, dateTime: endDate}
    editEvent({...event, summary, description, location, start, end})
  }
}

export default EditModal
