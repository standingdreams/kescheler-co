import React, { useRef, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Slider from "react-slick";

const IndexPage = () => {
  const { allPrismicHome } = useStaticQuery(HOME_QUERY)
  const {
    page_title, masthead_heading, masthead_copy, cta_block, masthead_background_image, solutions_section_heading, solutions_cta_copy, solutions_section_columns, solutions_section_title,author_section_heading, author_section_copy, author, author_title, author_sig, author_section_image, author_expertise, services_section_title, services_section_copy, services_list, testimonial_image, testimonial_items, about_section_title, about_section_heading, about_section_copy, about_columns
  } = allPrismicHome.edges[0].node.data

  const [currentSlide, setCurrentSlide] = useState(0)
  const testimonialSlider = useRef()

  const slickSettings = {
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    appendDots: dots => {
      dots.forEach(dot => {
        if (dot.props.className === 'slick-active') {
          setTimeout(() => {
            setCurrentSlide(dots.indexOf(dot))
          })
        }
      })

      return (
        <span className="p-home__testimonialSliderNumber el-small"></span>
      )
    },
  }

  const next = () => {
    testimonialSlider.current.slickNext();
  }

  const previous = () => {
    testimonialSlider.current.slickPrev();
  }

  const zeroPad = (num, places) => String(num).padStart(places, '0')

  return (
    <Layout title={ page_title.text } bodyClass="home">
      <section className="c-banner c-banner--home" style={{backgroundImage: `url(${ masthead_background_image.url })`}}>
        <div className="l-container">
          <div className="c-banner__content">
            <h1 className="el-h1 c-banner__heading">{ masthead_heading.text }</h1>
            <div className="l-content" dangerouslySetInnerHTML={{ __html: masthead_copy.html }}></div>
            <a href="/" className="el-btn el-btn--outline-white c-banner__cta">{ cta_block[0].cta_copy.text }</a>
          </div>
        </div>
      </section>
      <section className="p-home__provideSolutions">
        <div className="l-container">
          <header className="p-home__provideSolutionsHeader">
            <h2 className="o-block__heading el-h2">
              <span>{solutions_section_title.text}</span>
              {solutions_section_heading.text}
            </h2>
            <a href="/" className="el-btn el-btn--outline-grey p-home__provideSolutionsCTA">{solutions_cta_copy.text}</a>
          </header>
          <div className="p-home__provideSolutionsGrid l-grid l-grid--3">
            {solutions_section_columns.map((col, index) => (
              <div className="l-grid__col" key={`solutions-col-${index + 1}`}>
                <span className="p-home__provideSolutionsNum">{ index + 1 }</span>
                <h3 className="l-grid__heading el-h3 p-home__provideSolutionsSubheader">
                  {col.column_heading.text}
                </h3>
                <p>{col.column_copy.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-home__creativity">
        <div className="l-container">
          <figure className="p-home__creativityImage" style={{ backgroundImage: `url(${ author_section_image.url })` }}>
            <div className="p-home__creativityImageInfo">
              <span className="p-home__creativityImageHeading el-h2">{(new Date().getFullYear()) - 2013} Years</span>
              <span className="p-home__creativityImageSubHeading el-small">{author_expertise.text}</span>
            </div>
          </figure>
          <div className="p-home__creativityContent">
            <div className="o-block">
              <h2 className="o-block__heading el-h2">{ author_section_heading.text }</h2>
              <div className="l-content" dangerouslySetInnerHTML={{ __html: author_section_copy.html }}></div>
              <div className="p-home__creativityOwner">
                <img src={ author_sig.url } alt="Owner Signature"/>
                <h3 className="p-home__creativityOwnerHeading el-h4">
                  { author.text }
                  <span className="el-small">{ author_title.text }</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-home__aboutAgency l-section">
        <div className="l-container">
          <div className="o-block">
            <h2 className="o-block__heading el-h2">
              <span>{ about_section_title.text }</span>
              { about_section_heading.text }
            </h2>
            <div className="l-content" dangerouslySetInnerHTML={{__html: about_section_copy.html}}></div>
          </div>
          <div className="p-home__aboutAgencyPoints">
            {about_columns.map((aboutItem, index) => (
              <div className="p-home__aboutAgencyPointsItem" key={`aboutItem_${index}`}>
                <h3 className="p-home__aboutAgencyPointsItemHeading el-h3">{ aboutItem.about_col_heading.text }</h3>
                <p>{ aboutItem.about_column_copy.text }</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="p-home__testimonial l-section">
        <div className="l-container">
          <div className="p-home__testimonialContent">
            <Slider
            ref={slider => (testimonialSlider.current = slider)}
              {...slickSettings}
            >
              {testimonial_items.map((testimony, index) => (
                <div key={`testimonial_${index}`}>
                  <div className="p-home__testimonialContentWrap">
                    <h3 className="p-home__testimonialContentReviewer h5">
                      { testimony.attestant.text }
                      <span className="el-small">{ testimony.attestant_title.text }</span>
                    </h3>
                    <div className="p-home__testimonialContentCopy l-content" dangerouslySetInnerHTML={{__html: testimony.testimonial_copy.html}}></div>
                  </div>
                </div>
              ))}
            </Slider>
            <span className="p-home__testimonialSliderNumber el-small">{`${zeroPad(currentSlide + 1,2)}/${zeroPad(testimonial_items.length, 2)}`}</span>
          </div>
          <div className="p-home__testimonialImageWrap">
            <figure className="p-home__testimonialImage">
              <img src={ testimonial_image.url } alt=""/>
            </figure>
            <nav className="p-home__testimonialPagination">
              <button onClick={previous} className="p-home__testimonialBtn el-btn__arrow el-btn__arrow--left">Prev</button>
              <button onClick={next} className="p-home__testimonialBtn el-btn__arrow el-btn__arrow--right">Next</button>
            </nav>
          </div>
        </div>
      </section>
      <section className="p-home__services l-section l-section--bottom">
        <div className="l-container">
          <div className="o-block">
            <h2 className="o-block__heading el-h3">
              <span>{ services_section_title.text }</span>
              { services_section_copy.text }
            </h2>
          </div>
          <div className="p-home__servicesList" dangerouslySetInnerHTML={{__html: services_list.html}}></div>
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
