import React, { Component } from 'react'

class InputLabel extends Component {
  constructor(props) {
    super(props)
    this.state = {value: props.value}
  }

  render () {
    const {label, className, type, disabled, name, autofocus, displayInputWhenDisabled} = this.props
    const {value} = this.state

    return (
      <div className={`label-and-input ${className}`}>
        <label className='label'>{label}</label>
        {
          disabled && !displayInputWhenDisabled
            ? <div className='input-text-disabled'>{value}</div>
            : <input type={type} className='input-text input-text-black' value={value} onChange={e => this.onChange(e.target.value)} name={name} autoFocus={autofocus} disabled={disabled}/>
        }
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
  disabled: false,
  name: '',
  autofocus: false,
  displayInputWhenDisabled: true
}

export default InputLabel

