import React, { Component } from 'react'
import { map, kebabCase } from 'lodash'

//Components
import Slider from './Slider'
import Presentations from './Presentations'
import LookingForAJob from './LookingForAJob'

const navBarItems = [
  {name: "Accueil", link: '/home'},
  {name: "Le groupe", link: '/le-groupe'},
  {name: "L'activité", link: '/l-activite'},
  {name: "Nous rejoindre", link: '/nous-rejoindre'},
  {name: "Espace collaborateur", link: '/espace-collaborateur'},
  {name: "Contact", link: '/contact'},
  {name: "Mon ipssi", link: '/connexion'}
]

class Home extends Component{
  /******************************** DISPLAY METHODS ********************************/
  render () {
    return (
      <div className="Home">
        <header className="Header_wrapper">
          <div className="Header">
            <h1 className="Title">IPSSI-site</h1>
            <div className="Header_actions">
              <div className="Search_bar">
                <input type="text" className="input Search_input"/>
                <button className="Search_button padding"><i className="fa fa-search"/></button>
              </div>
            </div>
          </div>
        </header>
        <nav className="Navbar_wrapper">
          <ul className="Navbar">{map(navBarItems, (item, i) => <NavItem key={`nav-item-${i}`} item={item}/>)}</ul>
        </nav>
        <Slider/>
        <Presentations/>
        <LookingForAJob/>
        <footer className="Footer">
          <ul className="Company_infos">
            <li className="Info_item">
              <span className="fa fa-map-marker"/>
              6 Place Charles Hernu, <b>69100 Villeurbanne Lyon</b>
            </li>
            <li className="Info_item">
              <span className="fa fa-phone"/>
              <b>04 82 53 81 64</b>
            </li>
            <li className="Info_item">
              <span className="fa fa-envelope"/>
              <b>ip-formation@contact.fr</b>
            </li>
          </ul>
          <div className="About_company">
            <b>À propos de nous</b>
            <p>Lorem ipsum Excepteur in laborum mollit proident irure amet laborum minim dolore in et mollit minim minim.</p>
            <ul className="Social_networks">
              <li className="fa fa-facebook"/>
              <li className="fa fa-twitter"/>
              <li className="fa fa-linkedin"/>
              <li className="fa fa-github"/>
            </ul>
          </div>
          <div className="Contact_us">
            <b>Nous contacter</b>
            <input type="text" className="input-text"/>
            <textarea className="input-text"/>
          </div>
        </footer>
      </div>
    )
  }
}

const NavItem = ({ item : { name, link } }) => (
  <li className="Navbar_item" key={"navbar-item-"+kebabCase(name)}>
    <a href={link}>{name}</a>
  </li>
)

export default Home
