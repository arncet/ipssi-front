import React, { Component } from 'react'

class SelectLabel extends Component {
  constructor(props) {
    super(props)
    this.state = {value: props.value}
  }

  render () {
    const {label, className, options, disabled} = this.props
    const {value} = this.state

    return (
      <div className={`quill-label-wrapper ${className}`}>
        <div className='quill-label'>{label}</div>
        <select onChange={e => this.onChange(e.target.value)} defaultValue={value} disabled={disabled}>
          {options.map((option, i) => <option value={option.value} key={i}>{option.content}</option>)}
        </select>
      </div>
    )
  }

  onChange(value) {
    this.setState({value})
    this.props.onChange(value)
  }
}

SelectLabel.defaultProps = {
  label: '',
  className: '',
  options: [],
  value: '',
  disabled: false
}

export default SelectLabel

