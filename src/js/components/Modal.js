import React, {Component} from 'react'

class Modal extends Component{
  render() {
    const {children, overWindow = true, onClickOverlay = () => {}, display = false, className = ''} = this.props

    return display
      ? <div className='Modal_overlay' style={{position: `${overWindow ? 'fixed' : 'absolute'}`}} onClick={e => onClick(e, onClickOverlay)}>
          <div className={`Modal ${className}`}>{children}</div>
        </div>
      : <noscript/>
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.display && !this.props.display) this.setDisabledScroll(true)
    else if (!nextProps.display && this.props.display) this.setDisabledScroll(false)
  }

  componentWillUnmount() {
    this.setDisabledScroll(false)
  }

  setDisabledScroll(enable){
    document.body.style.overflow = enable ? 'hidden' : ''
  }
}

const onClick = (e, onClickOverlay) => {
  if(e.target === e.currentTarget) onClickOverlay(e)
}

export default Modal
