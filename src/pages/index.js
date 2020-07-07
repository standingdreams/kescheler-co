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
          <h2 className="el-h4 p-home__infoCardHeading">Visual Identity</h2>
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
            <h3 className="l-grid__heading el-h4 p-home__provideSolutionsSubheader">
              Creative Ideas
            </h3>
            <p>Pdio amet dapibus tristique mus placerat pharetra nullam.</p>
          </div>
          <div className="l-grid__col">
            <span className="p-home__provideSolutionsNum">2</span>
            <h3 className="l-grid__heading el-h4 p-home__provideSolutionsSubheader">
              Constructive Work
            </h3>
            <p>Praesent malesuada est iaculis duis mollis auctor feugiat integer natoque commodo</p>
          </div>
          <div className="l-grid__col">
            <span className="p-home__provideSolutionsNum">3</span>
            <h3 className="l-grid__heading el-h4 p-home__provideSolutionsSubheader">
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
            <span className="p-home__creativityImageSubHeading">Creativity For You</span>
          </div>
        </figure>
        <div className="p-home__creativityContent">
          <div className="o-block">
            <h2 className="o-block__heading el-h2">We're an experienced and very creative branding agency</h2>
            <p>Build on a culture of contribution and inclusion is a lot of persent cross-pollination, nor closing these latest prospects is like putting socks on an octopus, yet circle back. We need to make the new version clean and sexy critical mass.</p>
            <div className="p-home__creativityOwner">
              <img src="/owner-signature.svg" alt="Owner Signature"/>
              <h3 className="p-home__creativityOwnerHeading el-h5">
                Michelle Geralldiny
                <span>Art Director</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="p-home__aboutAgency">
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
            <h3 className="p-home__aboutAgencyPointsItemHeading el-h4">Our Philosophy</h3>
            <p>We want to empower the team with the right tools and sales are at an all-time clear water build better.</p>
          </div>
          <div className="p-home__aboutAgencyPointsItem">
            <h3 className="p-home__aboutAgencyPointsItemHeading el-h4">Our Mission</h3>
            <p>Going forward gain traction, nor ultimate measure of success so work.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
