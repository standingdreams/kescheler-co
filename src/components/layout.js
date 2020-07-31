import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Header from "./header"
import Footer from "../components/footer"

import "./../scss/styles.scss"

const Layout = props => {
  const children = props.children
  const { title } = props

  return (
    <>
      <SEO title={ title } />
      <Header />
      <main>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
}

Layout.defaultProps = {
  title: ``,
}

export default Layout
