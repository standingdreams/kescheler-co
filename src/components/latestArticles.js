import React from 'react'

const LatestArticles = () => {
  return (
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
  )
}

export default LatestArticles
