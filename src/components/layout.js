import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "../styles/index.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle={'E-commerce' || `Title`} />
      <div>
        <main>{children}</main>
        <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
