import React, {Component} from 'react'
import { kebabCase } from 'lodash'
import {getPath, inRoute} from '../../utils/routes'

//Containers
import Avatar from '../../containers/Avatar'

const navBarItems = [
  {
    name: "Actualité",
    routeName: 'intranet-actualite'
  },
  {
    name: "Ressouces Humaines",
    routeName: 'intranet-ressources-humaines',
    content: [
      {name: 'CRA', routeName: 'intranet-cra'},
      {name: 'Notes de frais', routeName: 'intranet-notes-de-frais'},
      {name: 'Demandes de congés', routeName: 'intranet-demandes-de-conges'},
      {name: 'CVthèque', routeName: 'intranet-cvtheqe'},
      {name: 'Offres de poste', routeName: 'intranet-offres-de-poste'},
      {name: 'Candidatures', routeName: 'intranet-candidatures'},
      {name: 'Collaborateurs', routeName: 'intranet-collaborateurs'}
    ]
  },
  {
    name: "Boite à outils",
    routeName: 'intranet-boite-a-outils',
    content: [
      {name: 'Certifications', routeName: 'intranet-certifications'},
      {name: 'Documents de travail', routeName: 'intranet-documents-de-travail'}
    ]
  },
  {
    name: "Paramétrages",
    routeName: 'intranet-parametrages',
    content: [
      {name: 'RH', routeName: 'intranet-rh'},
      {name: 'CRM', routeName: 'intranet-crm'}
    ]
  },
  {
    name: "Administration",
    routeName: 'intranet-administration',
    content: [
      {name: 'Gestion des utilisateurs', routeName: 'intranet-gestion-des-utilisateurs'},
      {name: 'Application', routeName: 'intranet-application'}
    ]
  },
]

class Header extends Component{
  constructor(props) {
    super(props)
    this.state = {routeSelected: null}
  }

  render() {
    const {location: {pathname}} = this.props
    const {routeSelected} = this.state
    const route = routeSelected ? navBarItems.find(item => item.routeName === routeSelected) : null

    return (
      <div className="Header">
        <header className="Header_wrapper">
          <div className="Header">
            <h1 className="Title">IPSSI - Intranet</h1>
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
    const {location: {pathname}} = this.props
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
