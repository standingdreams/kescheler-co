import React from 'react'

const CreativeWorks = () => {
  return (
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
  )
}

export default CreativeWorks
