import React from 'react'

const VideoArea = () => {
  return (
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
    </section>
  )
}

export default VideoArea
