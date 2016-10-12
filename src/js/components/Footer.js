import React from 'react'

const Footer = () => (
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
        <li className="Social_networks_item">
          <a href="http://www.facebook.fr" className="fa fa-facebook" target="_blank"/>
        </li>
        <li className="Social_networks_item">
          <a href="http://www.twitter.fr" className="fa fa-twitter" target="_blank"/>
        </li>
        <li className="Social_networks_item">
          <a href="http://www.linkedin.fr" className="fa fa-linkedin" target="_blank"/>
        </li>
        <li className="Social_networks_item">
          <a href="http://www.github.fr" className="fa fa-github" target="_blank"/>
        </li>
      </ul>
    </div>
    <div className="Contact_us">
      <b className="Contact_us_title">Nous contacter</b>
      <input type="email" className="input-text" placeholder="E-mail"/>
      <textarea className="textarea"/>
      <button className="button">Envoyer</button>
    </div>
    <div className="Copyright">© Copyright 2016 Ipssi</div>
  </footer>
)

export default Footer
