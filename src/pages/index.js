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
  const slickSettings = {
    adaptiveHeight: true,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    afterChange: current => setCurrentSlide(current),
  }

  const next = () => {
    testimonialSlider.current.slickNext();
  }

  const previous = () => {
    testimonialSlider.current.slickPrev();
  }

  const zeroPad = (num, places) => String(num).padStart(places, '0')

  return (
    <Layout title={ page_title.text }>
      <section className="p-home__banner" style={{backgroundImage:`url(${ masthead_background_image.url })`}}>
        <div className="l-container">
          <div className="p-home__content">
            <h1 className="el-h1 p-home__heading">{ masthead_heading.text }</h1>
            <div className="l-content" dangerouslySetInnerHTML={{ __html: masthead_copy.html }}></div>
            <a href="/" className="el-btn el-btn--outline-white p-home__cta">{ cta_block[0].cta_copy.text }</a>
          </div>
        </div>
        {/* <div className="p-home__infoCard">
          <div className="p-home__infoCardContent">
            <span className="p-home__infoCardTag">Branding</span>
            <h2 className="el-h3 p-home__infoCardHeading">Visual Identity</h2>
            <p>The colors were selected in order to convey sobriety so that the identity can be applied to the image.</p>
          </div>
        </div> */}
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
          <figure className="p-home__creativityImage" style={{ backgroundImage:`url(${ author_section_image.url })` }}>
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
            <span className="p-home__testimonialSliderNumber el-small">{`${zeroPad(currentSlide,2)}/${zeroPad(testimonial_items.length, 2)}`}</span>
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
      {/* <section className="p-home__creativeWorks l-section">
        <div className="l-container">
          <div className="o-block">
            <h2 className="o-block__heading el-h2">
              <span>Creative Works</span>
              Enjoy our latest awesome projects
            </h2>
            <nav className="p-home__creativeWorksArrows">
              <button className="el-btn__arrow el-btn__arrow--left">Prev</button>
              <button className="el-btn__arrow el-btn__arrow--right">Next</button>
            </nav>
          </div>
          <div className="p-home__creativeWorksSlider">
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <a href="/" className="p-home__creativeWorksCTA el-btn el-btn--solid-grey">View Details</a>
          </div>
        </div>
      </section>
      <section className="p-home__latestArticles l-section">
        <div className="l-container">
          <div className="o-block">
            <div className="o-block__heading el-h2">
              <span>Latest articles</span>
              We want our customers to feel amazing and unique. Check out our articles on how we brought our customers' projects to another level
            </div>
            <div className="o-block__content o-block__content--split">
              <p>This is meaningless commitment to cause back of the net we want to see lunch we more charts yet poop, or finance would also dogging. It's not hard guys we ahead.</p>
              <a href="/" className="o-block__btn el-btn el-btn--solid-purple">Blog</a>
            </div>
          </div>
          <div className="p-home__blogList l-grid l-grid--3">
            <article className="p-home__blogItem l-grid__col c-blog__post">
              <h2 className="el-h3 p-home__blogItemHeading"><a href="/">The secret to success is creativity and courage</a></h2>
              <span className="p-home__blogItemDate">Mar <span>05</span></span>
              <p>We are running out runway no scraps hit the floor your plate, and quick win into...</p>
              <a href="/" className="el-btn el-btn__linkArrow p-home__blogItemCTA">Read more</a>
            </article>
            <article className="p-home__blogItem l-grid__col c-blog__post">
              <h2 className="el-h3 p-home__blogItemHeading"><a href="/">Top 5 creative ways to boost your media</a></h2>
              <span className="p-home__blogItemDate">May <span>28</span></span>
              <p>Tribal knowledge a tentative event rundown is attached for your reference other...</p>
              <a href="/" className="el-btn el-btn__linkArrow p-home__blogItemCTA">Read more</a>
            </article>
            <article className="p-home__blogItem l-grid__col c-blog__post">
              <h2 className="el-h3 p-home__blogItemHeading"><a href="/">Make now something out of your great ideas</a></h2>
              <span className="p-home__blogItemDate">Jun <span>30</span></span>
              <p>Post launch curate, so blue sky thinking I've been doing some research this...</p>
              <a href="/" className="el-btn el-btn__linkArrow p-home__blogItemCTA">Read more</a>
            </article>
          </div>
        </div>
      </section>
      <section className="p-home__videoArea l-section">
        <div className="l-container">
          <div className="o-block">
            <h2 className="o-block__heading el-h2">
              <span>Honored Awards</span>
              We work hard to achieve best awards
            </h2>
            <a href="/" className="el-btn el-btn--outline-grey o-block__btn">Our Video</a>
          </div>
          <div className="p-home__videoAreaContent">
            <p>Drive awareness to increase engagement exposing new the ways to evolve our design language, digital literacy. Prethink talk to the slides, regroup your plate, so pivot. Diversify kpis work measure of success dogpile that our vision.</p>
          </div>
        </div>
        <div className="p-home__videoAreaItem">
          <iframe title="videoAreaItem" src="https://www.youtube.com/embed/Y4Z7Ds_yv8o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="l-container">
            <button className="el-btn__empty">Play</button>
          </div>
        </div>
      </section> */}
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
