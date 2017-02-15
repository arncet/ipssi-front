import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import {toolbar} from '../config'

class QuillLabel extends Component {
  constructor(props) {
    super(props)
    this.state = {value: props.value}
  }

  render () {
    const {label, className, disabled, displayInputWhenDisabled} = this.props
    const {value} = this.state


    return (
      <div className={`quill-label-wrapper ${className}`}>
        <div className='quill-label'>{label}</div>
        {
          disabled && !displayInputWhenDisabled
            ? <div className='quill-input-disabled' dangerouslySetInnerHTML={{__html: value}}/>
            : <ReactQuill value={value} onChange={text => this.onChange(text)} theme='snow' toolbar={toolbar} readOnly={disabled}/>
        }
      </div>
    )
  }

  onChange(value) {
    this.setState({value})
    this.props.onChange(value)
  }
}

QuillLabel.defaultProps = {
  label: '',
  className: '',
  disabled: false,
  displayInputWhenDisabled: true
}

export default QuillLabel

