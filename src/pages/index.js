import React from "react"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout title="Home">
    <section className="p-home__banner">
      <div class="l-container">
        <div className="p-home__content">
          <h1 className="el-h1 p-home__heading">DBA Group Visual identity</h1>
          <p>The newly created company needed a corporate identity that simply conveyed stability, strength, determination and optimism.</p>
          <a href="/" className="el-btn el-btn--outline p-home__cta">View Details</a>
        </div>
      </div>
      <div className="p-home__infoCard">
        <div className="p-home__infoCardContent">
          <span className="p-home__infoCardTag">Branding</span>
          <h2 className="el-h3 p-home__infoCardHeading">Visual Identity</h2>
          <p>The colors were selected in order to convey sobriety so that the identity can be applied to the image.</p>
        </div>
      </div>
    </section>
    <section className="p-home__provideSolutions">
      <div className="l-container">
        <header class="p-home__provideSolutionsHeader">
          <h2 className="o-block__heading el-h2">
            <span>Provide Solutions</span>
            Digital web products for amazing and successful customers.
          </h2>
          <a href="/" className="el-btn el-btn--outline p-home__provideSolutionsCTA">Order Now</a>
        </header>
        <div className="p-home__provideSolutionsGrid l-grid l-grid--3">
          <div className="l-grid__col">
            <span className="p-home__provideSolutionsNum">1</span>
            <h3 className="l-grid__heading el-h3 p-home__provideSolutionsSubheader">
              Creative Ideas
            </h3>
            <p>Pdio amet dapibus tristique mus placerat pharetra nullam.</p>
          </div>
          <div className="l-grid__col">
            <span className="p-home__provideSolutionsNum">2</span>
            <h3 className="l-grid__heading el-h3 p-home__provideSolutionsSubheader">
              Constructive Work
            </h3>
            <p>Praesent malesuada est iaculis duis mollis auctor feugiat integer natoque commodo</p>
          </div>
          <div className="l-grid__col">
            <span className="p-home__provideSolutionsNum">3</span>
            <h3 className="l-grid__heading el-h3 p-home__provideSolutionsSubheader">
              Market Research
            </h3>
            <p>Praesent odio amet dapibus tristique mus placerat pharetra nullam.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="p-home__creativity">
      <div className="l-container">
        <figure className="p-home__creativityImage">
          <div className="p-home__creativityImageInfo">
            <span className="p-home__creativityImageHeading el-h2">25 Years</span>
            <span className="p-home__creativityImageSubHeading el-small">Creativity For You</span>
          </div>
        </figure>
        <div className="p-home__creativityContent">
          <div className="o-block">
            <h2 className="o-block__heading el-h2">We're an experienced and very creative branding agency</h2>
            <p>Build on a culture of contribution and inclusion is a lot of persent cross-pollination, nor closing these latest prospects is like putting socks on an octopus, yet circle back. We need to make the new version clean and sexy critical mass.</p>
            <div className="p-home__creativityOwner">
              <img src="/owner-signature.svg" alt="Owner Signature"/>
              <h3 className="p-home__creativityOwnerHeading el-h4">
                Michelle Geralldiny
                <span className="el-small">Art Director</span>
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
            <span>About agency</span>
            We work with a spark creating the best quality products.
          </h2>
          <p>On this journey rehydrate the team pre launch disband the squad but rehydrate as needed but we need to aspirationalise our offerings. Bench mark that's mint, well done but roll back strategy we need a recap by eod, cob or whatever comes first for products need full resourcing...</p>
        </div>
        <div className="p-home__aboutAgencyPoints">
          <div className="p-home__aboutAgencyPointsItem">
            <h3 className="p-home__aboutAgencyPointsItemHeading el-h3">Our Philosophy</h3>
            <p>We want to empower the team with the right tools and sales are at an all-time clear water build better.</p>
          </div>
          <div className="p-home__aboutAgencyPointsItem">
            <h3 className="p-home__aboutAgencyPointsItemHeading el-h3">Our Mission</h3>
            <p>Going forward gain traction, nor ultimate measure of success so work.</p>
          </div>
        </div>
      </div>
    </section>
    <section className="p-home__testimonial l-section">
      <div className="l-container">
        <div className="p-home__testimonialContent">
          <h3 className="p-home__testimonialContentReviewer h5">
            Kescheler Nix-Powell
            <span className="el-small">Marketing Expert</span>
          </h3>
          <p className="el-h3">"Thinking outside the box we don't want to boil the ocean nor crank this out wheelhouse, or gain traction, nor going forward. Driving the initiative forward you better."</p>
          <span className="p-home__testimonialSliderNumber el-small">01/04</span>
        </div>
        <div className="p-home__testimonialImageWrap">
          <figure className="p-home__testimonialImage"></figure>
          <nav className="p-home__testimonialPagination">
            <button className="p-home__testimonialBtn el-btn__arrow el-btn__arrow--left">Prev</button>
            <button className="p-home__testimonialBtn el-btn__arrow el-btn__arrow--right">Next</button>
          </nav>
        </div>
      </div>
    </section>
    <section className="p-home__services l-section">
      <div className="l-container">
        <div className="o-block">
          <h2 className="o-block__heading el-h3">
            <span>Services</span>
            Wide range of design and development services provided with a creative and personal touch any project.
          </h2>
        </div>
        <div className="p-home__servicesList">
          <ul>
            <li>Packaging</li>
            <li>Social Media</li>
            <li>Interactive Design</li>
            <li>UX/UI</li>
            <li>Branding</li>
            <li>Creative Strategy</li>
            <li>Web Design</li>
            <li>Animation</li>
            <li>Coding</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="p-home__creativeWorks l-section">
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
            <date>Mar <span>05</span></date>
            <p>We are running out runway no scraps hit the floor your plate, and quick win into...</p>
            <a href="/" className="el-btn el-btn__linkArrow p-home__blogItemCTA">Read more</a>
          </article>
          <article className="p-home__blogItem l-grid__col c-blog__post">
            <h2 className="el-h3 p-home__blogItemHeading"><a href="/">Top 5 creative ways to boost your media</a></h2>
            <date>May <span>28</span></date>
            <p>Tribal knowledge a tentative event rundown is attached for your reference other...</p>
            <a href="/" className="el-btn el-btn__linkArrow p-home__blogItemCTA">Read more</a>
          </article>
          <article className="p-home__blogItem l-grid__col c-blog__post">
            <h2 className="el-h3 p-home__blogItemHeading"><a href="/">Make now something out of your great ideas</a></h2>
            <date>Jun <span>30</span></date>
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
          <a href="/" className="el-btn el-btn--outline o-block__btn">Our Video</a>
        </div>
        <div className="p-home__videoAreaContent">
          <p>Drive awareness to increase engagement exposing new the ways to evolve our design language, digital literacy. Prethink talk to the slides, regroup your plate, so pivot. Diversify kpis work measure of success dogpile that our vision.</p>
        </div>
      </div>
      <div className="p-home__videoAreaItem">
        <iframe title="videoAreaItem" src="https://www.youtube.com/embed/Y4Z7Ds_yv8o" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="l-container">
          <button className="el-btn--focus"></button>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
