import React, { Component } from 'react'

class ImagePreview extends Component {

  render () {
    const {label, disabled, src} = this.props

    if(disabled) return src ? <div style={{backgroundImage: `url('${src}')`}} className='Preview_disabled'/> : null

    return (
      <div className='Image_preview'>
        <div className='Image_preview_label'>{label}</div>
        {src ? <img className='Preview' src={src}/> : null}
        <input type='file' accept='image/*' className='Input_file' onChange={e => this.onChange(e)}/>
      </div>
    )
  }

  onChange(e) {
    const {files} = e.currentTarget
    const {onChange} = this.props

    if (files && files[0]) {
      const reader = new FileReader()
      reader.onload = function (event) {
        onChange(event.target.result)
      }.bind(this)
      reader.readAsDataURL(files[0])
    }
  }
}

ImagePreview.defaultProps = {
  label: 'Image Preview'
}

export default ImagePreview
