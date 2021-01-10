import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import '../styles/components/header.css'
import Menu from '../images/menu.svg'

import ShowMenu from '../utils/NavBar'

const Header = ({ siteTitle }) => (
  <header>
        <Link to="/" className="Header__Container">
          <img src="https://www.flaticon.com/svg/static/icons/svg/609/609752.svg" alt=""/>
          <h1>{siteTitle}</h1>
        </Link>
        <div className="Header__NavBar" id="NavBar" >
          <Link to="/page-2">Opción 1</Link> 
          <Link to="/successful">Opción 2</Link>
          <Link>Opción 3</Link>
        </div>
        <div className="Header__Menu" id="MenuIcon" onClick={ShowMenu}>
          {/* <img src={Menu} alt=""/> */}
        </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
