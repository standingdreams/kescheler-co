import React from "react"
import PropTypes from "prop-types"

import SEO from "../components/seo"
import Header from "./header"
import Footer from "../components/footer"

import "./../scss/styles.scss"
import { graphql, useStaticQuery } from "gatsby"

const Layout = props => {
  const children = props.children
  const { title, bodyClass } = props
  const { allPrismicGlobal } = useStaticQuery(GLOBAL_QUERY)
  const { black_logo, white_logo, facebook_url, instagram_url, twitter_url, linkedin_url, email_address, quote_slogan } = allPrismicGlobal.edges[0].node.data

  return (
    <>
      <SEO title={ title } bodyClass={ bodyClass } />
      <Header
        mastheadLogo={ black_logo.url }
      />
      <main>{children}</main>
      <Footer
        footerLogo={ white_logo.url }
        facebook={ facebook_url.url }
        instagram={ instagram_url.url }
        twitter={ twitter_url.url }
        linkedin={ linkedin_url.url }
        email_address={ email_address.text }
        quote_slogan={ quote_slogan.text }
      />
    </>
  )
}

const GLOBAL_QUERY = graphql`
  {
    allPrismicGlobal {
      edges {
        node {
          data {
            black_logo {
              url
            }
            white_logo {
              url
            }
            facebook_url {
              url
            }
            instagram_url {
              url
            }
            twitter_url {
              url
            }
            linkedin_url {
              url
            }
            email_address {
              text
            }
            quote_slogan {
              text
            }
          }
        }
      }
    }
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  bodyClass: PropTypes.string,
  title: PropTypes.string,
}

Layout.defaultProps = {
  bodyClass: ``,
  title: ``,
}

export default Layout
