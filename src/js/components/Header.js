import React, {Component} from 'react'
import { kebabCase } from 'lodash'
import {getPath, inRoute} from '../utils/routes'

//Containers
import Avatar from '../containers/Avatar'

const navBarItems = [
  {
    name: "Accueil",
    routeName: 'home'
  },
  {
    name: "Le groupe",
    routeName: 'le-groupe',
    content: [
      {name: 'Présentation', routeName: 'presentation'},
      {name: 'Chiffres clés', routeName: 'chiffres-cles'},
      {name: 'Notre expertise', routeName: 'notre-expertise'},
      {name: 'La valeur du groupe', routeName: 'la-valeur-du-groupe'}
    ]
  },
  {
    name: "L'activité",
    routeName: 'l-activite',
    content: [
      {name: 'Nos métiers', routeName: 'nos-metiers'},
      {name: 'Nos secteurs d\'activités', routeName: 'nos-secteurs-d-activites'},
      {name: 'Ils nous font confiance', routeName: 'ils-nous-font-confiance'},
    ]
  },
  {
    name: "Nous rejoindre",
    routeName: 'nous-rejoindre',
    content: [
      {name: 'Les postes à pourvoir', routeName: 'les-postes-a-pourvoir'},
      {name: 'Postuler', routeName: 'postuler'}
    ]
  },
  {
    name: "Espace collaborateur",
    routeName: 'espace-collaborateur'
  },
  {
    name: "Contact",
    routeName: 'contact'
  },
  {
    name: "Mon ipssi"
  }
]

class Header extends Component{
  constructor(props) {
    super(props)
    this.state = {routeSelected: null}
  }

  render() {
    const {pathname} = this.props
    const {routeSelected} = this.state
    const route = routeSelected ? navBarItems.find(item => item.routeName === routeSelected) : null

    return (
      <div className="Header">
        <header className="Header_wrapper">
          <div className="Header">
            <h1 className="Title">IPSSI</h1>
            <div className="Header_actions">
              <div className="Search_bar">
                <input type="text" className="input Search_input"/>
                <button className="Search_button padding"><i className="fa fa-search"/></button>
              </div>
              <Avatar/>
            </div>
          </div>
        </header>
        <nav className="Navbar_wrapper">
          <ul className="Navbar">
            {
              navBarItems.map((item, i) => {
                const current = routeSelected
                  ? routeSelected === item.routeName
                  : inRoute(pathname, item.routeName)
                return (
                  <NavItem
                    key={`nav-item-${i}`}
                    item={item}
                    current={current}
                    onClick={routeName => this.setState({routeSelected: routeName})}
                  />
                )
              })
            }
          </ul>
          {
            route && route.content ?
              <ul className="Sub_navbar">
                {route.content.map((item, i) => {
                  const current = inRoute(pathname, item.routeName)
                  return (
                    <NavItem
                      key={`nav-item-${i}`}
                      item={item}
                      current={current}
                    />
                  )
                })}
              </ul>
            : null
          }
        </nav>
      </div>
    )
  }

  componentDidMount() {
    const {pathname} = this.props
    const route = navBarItems.find(item => inRoute(pathname, item.routeName))
    const routeSelected = route ? route.routeName : null
    this.setState({routeSelected})
  }
}

const NavItem = ({ item: { name, routeName, content }, current, onClick = () => {} }) => (
  <li
    className={`Navbar_item${current ? ' Navbar_item_current' : ''}`}
    key={"navbar-item-"+kebabCase(name)}
    onClick={() => onClick(routeName)}
  >
    <a href={content ? null : getPath(routeName)}>{name}</a>
  </li>
)

export default Header
