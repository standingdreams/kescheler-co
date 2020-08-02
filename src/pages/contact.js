import React, { useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Slider from "react-slick";

const IndexPage = () => {
  const { allPrismicHome } = useStaticQuery(HOME_QUERY)
  const {
    page_title, masthead_heading, masthead_copy, cta_block, masthead_background_image, solutions_section_heading, solutions_cta_copy, solutions_section_columns, solutions_section_title,author_section_heading, author_section_copy, author, author_title, author_sig, author_section_image, author_expertise, services_section_title, services_section_copy, services_list, testimonial_image, testimonial_items, about_section_title, about_section_heading, about_section_copy, about_columns
  } = allPrismicHome.edges[0].node.data

  const [currentSlide, setCurrentSlide] = useState(1)
  const testimonialSlider = useRef()

  return (
    <Layout title={ page_title.text }>
      <section className="p-home__banner" style={{backgroundImage:`url(${ masthead_background_image.url })`}}>
        <div className="l-container">
          <div className="p-home__content">
            <h1 className="el-h1 p-home__heading">Lets Get Started</h1>
            <div className="l-content">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aut eos fugiat facilis autem architecto nulla alias, officia impedit voluptatibus explicabo id odit, unde omnis ut odio magnam dignissimos doloremque.</p>
            </div>
            <a href="#contactForm" className="el-btn el-btn--outline-white p-home__cta">Contact Us</a>
          </div>
        </div>
      </section>
      <section className="p-contact l-section l-section--bottom">
        <div className="l-container">
          <figure className="p-contact__image" style={{ backgroundImage:`url(${ author_section_image.url })` }}></figure>
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
            solutions_section_title {
              text
            }
            solutions_section_heading {
              text
            }
            solutions_cta_copy {
              text
            }
            solutions_section_columns {
              column_heading {
                text
              }
              column_copy {
                text
                html
              }
            }
            author_section_heading {
              text
            }
            author_section_copy {
              html
            }
            author {
              text
            }
            author_title {
              text
            }
            author_sig {
              url
            }
            author_section_image {
              url
            }
            author_expertise {
              text
            }
            about_section_title {
              text
            }
            about_section_heading {
              text
            }
            about_section_copy {
              html
            }
            about_columns {
              about_col_heading {
                text
              }
              about_column_copy {
                text
              }
            }
            testimonial_image {
              url
            }
            testimonial_items {
              attestant {
                text
              }
              attestant_title {
                text
              }
              testimonial_copy {
                html
              }
            }
            services_section_title {
              text
            }
            services_section_copy {
              text
            }
            services_list {
              html
            }
          }
        }
      }
    }
  }
`

export default IndexPage
