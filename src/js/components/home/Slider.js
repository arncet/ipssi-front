import React, { Component } from 'react'
import kebabCase from 'lodash/kebabCase'

import Filter from '../commons/Filter'

const sliderItem = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    src: 'assets/images/home/desktop-mac-2.jpg',
    link: '/articles/lorem-ipsum'
  },
  {
    id: 2,
    title: 'Lorem ipsum.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    src: 'assets/images/home/b6972e09ad5bf832a831ca2f6200e358.jpg',
    link: '/articles/lorem-ipsum'
  },
  {
    id: 3,
    title: 'Lorem ipsum jygfhjyhj.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    src: 'assets/images/home/02_b.jpg',
    link: '/articles/lorem-ipsum'
  }
]

class Slider extends Component{

  constructor(props) {
    super(props)
    this.state = {
      currentId: sliderItem[0].id,
      hoverSliderId: null,
      hoverMenuId: null,
      pause: false
    }
  }

  /******************************** RENDER ********************************/

  render () {
    const { currentId, hoverMenuId, pause } = this.state
    return (
      <div className="Slider_and_slider_menu">
        <div className="Slider_wrapper">
          <div className="Slider_prev fa fa-chevron-left" onClick={() => this.prev()}/>
          <div className={`Slider_pause fa fa-${pause ? 'pause' : 'play'}`} onClick={() => this.setState({ pause: !pause })}/>
          <ul className="Slider">
            {sliderItem.map((item, i) => this.displaySliderItem(item, i, currentId === item.id))}
          </ul>
          <div className="Slider_next fa fa-chevron-right" onClick={() => this.next()}/>
        </div>
        <div className="Slider_menu_wrapper">
          <ul className="Slider_menu">
            {sliderItem.map((item, i, items) => this.displaySliderMenuItem(item, i, items, currentId === item.id, hoverMenuId === item.id))}
          </ul>
        </div>
      </div>
    )
  }

  displaySliderItem (item, i, current) {
    const { id, title, description, src, link } = item
    return (
      <li
        className="Slider_item"
        key={"home-slider-item-"+kebabCase(title)}
        style={this.getSliderItemStyle()}
        onMouseEnter={() => this.onMouseEnterSliderItem(id)}
        onMouseLeave={() => this.onMouseLeaveSLiderItem()}
      >
        <div className="Slider_item_picture" style={{backgroundImage:`url(${src})`}}/>
        <div className="Slider_text">
            <div className="Slider_item_title"><a href={link}>{title}</a></div>
            <p className="Slider_item_description">{description}</p>
        </div>
      </li>
    )
  }

  displaySliderMenuItem (item, i, items, current, hover) {
    const { id, title, src, link } = item
    const width = `calc(${(100 / items.length).toString()}% - 5px)`
    const sliderPictureStyle = { backgroundImage: `url(${src})`, width: width }
    return (
      <li
        className={`Slider_menu_item ${current ? 'Current_item' : ''}`}
        key={`home-slider-menu-item-${id}`}
        style={sliderPictureStyle}
        onClick={() => this.setState({ currentId: id, pause: true })}
        onMouseEnter={() => this.onMouseEnterMenuItem(id, current)}
        onMouseLeave={() => this.onMouseLeaveMenuItem()}
      >
        { !current && !hover ? <Filter/> : null }
        <a href={link} className="Slider_menu_item_title">{title}</a>
      </li>
    )
  }

  /******************************** COMPONENT LIFECYCLE ********************************/

  componentDidMount() {
    this.interval = setInterval(() => {
      const { hoverSliderId, pause } = this.state
      if (hoverSliderId || pause) return
      this.next()
    }, 5000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  /******************************** LISTENERS ********************************/

  onMouseEnterSliderItem (id) {
    this.setState({ hoverSliderId: id })
  }

  onMouseLeaveSLiderItem () {
    this.setState({ hoverSliderId: null })
  }

  onMouseEnterMenuItem (id, current) {
    if (!current) this.setState({ hoverMenuId: id })
  }

  onMouseLeaveMenuItem () {
    this.setState({ hoverMenuId: null })
  }

  prev () {
    const { currentId } = this.state
    const currentItemIndex = sliderItem.findIndex((item) => item.id === currentId)
    const newId = sliderItem[currentItemIndex - 1] ? sliderItem[currentItemIndex - 1].id : sliderItem[sliderItem.length - 1].id
    this.setState({ currentId: newId })
  }

  next () {
    const { currentId } = this.state
    const currentItemIndex = sliderItem.findIndex((item) => item.id === currentId)
    const newId = sliderItem[currentItemIndex + 1] ? sliderItem[currentItemIndex + 1].id : sliderItem[0].id
    this.setState({ currentId: newId })
  }

  /******************************** CUSTOM METHODS ********************************/

  getSliderItemStyle () {
    const currentItemIndex = sliderItem.findIndex((item) => item.id === this.state.currentId)
    return { right: `${ 100 * (currentItemIndex)}%` }
  }
}

export default Slider
