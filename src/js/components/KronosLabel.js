import React, { Component } from 'react'
import moment from '../utils/moment'
import Kronos from 'react-kronos'

class KronosLabel extends Component {
  constructor(props) {
    super(props)
    this.state = {value: props.value}
  }

  render () {
    const {label, className, disabled} = this.props
    const {value} = this.state

    return (
      <div className={`label-and-input ${className}`}>
        <label className='label'>{label}</label>
        {
          disabled
            ? <div>{moment(value).format('LL')}</div>
            : <Kronos
                date={value}
                onChangeDateTime={date => this.onChange(date)}
                preventClickOnDateTimeOutsideRange={true}
              />
        }
      </div>
    )
  }

  onChange(date) {
    this.setState({value: date})
    this.props.onChange(date)
  }
}

KronosLabel.defaultProps = {
  label: '',
  className: '',
  disabled: false
}

export default KronosLabel
