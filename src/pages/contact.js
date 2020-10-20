import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  const { allPrismicHome } = useStaticQuery(HOME_QUERY)
  const {
    page_title, masthead_background_image, author_section_image } = allPrismicHome.edges[0].node.data

  return (
    <Layout title={ page_title.text } bodyClass="contact">
      <section className="c-banner" style={{backgroundImage: `url(${ masthead_background_image.url })`}}>
        <div className="l-container">
          <div className="c-banner__content">
            <h1 className="el-h1 c-banner__heading">Lets Get Started</h1>
            <div className="l-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut eos fugiat facilis autem architecto nulla alias, officia impedit voluptatibus explicabo id odit, unde omnis ut odio magnam dignissimos doloremque.</p>
            </div>
            <a href="#contactForm" className="el-btn el-btn--outline-white c-banner__cta">Contact Us</a>
          </div>
        </div>
      </section>
      <section id="contactForm" className="p-contact l-section l-section--bottom">
        <div className="l-container">
          <figure className="p-contact__image" style={{ backgroundImage: `url(${ author_section_image.url })` }}></figure>
          <div className="p-contact__content">
            <div className="o-block">
              <h2 className="o-block__heading el-h2">Curabitur lorem pharetra nec metus nibh consequat ex.</h2>
              <form className="p-contact__form" action="#">
                <div className="p-contact__formGrid">
                  <div className="p-contact__formItem">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" className="p-contact__formInput" id="fname" name="fname" />
                  </div>
                  <div className="p-contact__formItem">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" className="p-contact__formInput" id="lname" name="lname" />
                  </div>
                  <div className="p-contact__formItem">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="p-contact__formInput" id="email" name="email" />
                  </div>
                  <div className="p-contact__formItem">
                    <label htmlFor="currentURL">Current Site</label>
                    <input type="text" className="p-contact__formInput" id="currentURL" name="currentURL" />
                  </div>
                  <div className="p-contact__formItem p-contact__formItem--message">
                    <label htmlFor="message">Message</label>
                    <textarea className="p-contact__formTextarea" name="message" id="message"></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const HOME_QUERY = graphql`
  {
    allPrismicHome {
      edges {
        node {
          data {
            page_title {
              text
            }
            masthead_heading {
              text
            }
            masthead_copy {
              html
              text
            }
            cta_block {
              cta_copy {
                text
              }
              cta_link {
                link_type
                slug
                url
              }
              cta_button_style
            }
            masthead_background_image {
              url
            }
            author_section_image {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
