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
          <h2 className="p-home__provideSolutionsHeading el-h2">
            <span>&mdash; Provide Solutions</span>
            Digital web products for amazing and successful customers.
          </h2>
          <a href="/" className="el-btn el-btn--outline">Order Now</a>
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
  </Layout>
)

export default IndexPage
