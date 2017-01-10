import React, { Component } from 'react'

class InputLabel extends Component {
  constructor(props) {
    super(props)
    this.state = {value: props.value}
  }

  render () {
    const {label, className, type, disabled} = this.props
    const {value} = this.state

    return (
      <div className={`label-and-input ${className}`}>
        <label className='label'>{label}</label>
        <input type={type} className='input-text input-text-black Create_event_title' value={value} onChange={e => this.onChange(e.target.value)} disabled={disabled}/>
      </div>
    )
  }

  onChange(value) {
    this.setState({value})
    this.props.onChange(value)
  }
}

InputLabel.defaultProps = {
  label: '',
  className: '',
  type: 'text',
  disabled: false
}

export default InputLabel

