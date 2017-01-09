import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import {toolbar} from '../config'

class QuillLabel extends Component {
  constructor(props) {
    super(props)
    this.state = {value: props.value}
  }

  render () {
    const {label, className} = this.props
    const {value} = this.state

    return (
      <div className={`quill-label-wrapper ${className}`}>
        <div className='quill-label'>{label}</div>
        <ReactQuill value={value} onChange={text => this.onChange(text)} theme='snow' toolbar={toolbar}/>
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
  className: ''
}

export default QuillLabel

