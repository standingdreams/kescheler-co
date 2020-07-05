import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import SEO from "../components/seo"
import "./../scss/styles.scss"

const Layout = props => {
  const children = props.children
  const [ title ] = props

  return (
    <>
      <SEO title={ title } />
      <Header />
      <main>{children}</main>
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
