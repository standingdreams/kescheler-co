import React from 'react'
import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"

const Blogroll = () => {
  return (
    <Layout title="Blog Roll">
      <Breadcrumbs />
      <section className="c-blogroll">
        <div className="l-container c-blogroll__grid">
          {/* Post W/ Image */}
          <div className="c-blogroll__post">
            <date>
              Mar
              <span>05</span>
            </date>
            <h2 className="c-blogroll__heading el-h2">
              <span className="el-small">Inspiration | Web</span>
              <a href="/">
                Our Company Still Has Strongly Faith in Online Advertising
              </a>
            </h2>
            <div className="c-blogroll__postContent">
              <p>Bench mark Bob called an all-hands this afternoon, or performance review nor conversational content get buy-in. Come up with something buzzworthy that's mint, well done but globalize about managing expectations drink from.</p>
              <div className="c-blogroll__meta">
                <div className="c-blogroll__author">
                  <figure className="c-blogroll__authorImage"></figure>
                  By Marco Bowman
                </div>
                <div className="c-blogroll__postDetails">
                  <span className="c-blogroll__postComments el-small">Comments 1</span>
                  <span className="c-blogroll__postLike el-small">Like 3</span>
                </div>
              </div>
            </div>
          </div>
          {/* Post W/o Image */}
          <div className="c-blogroll__post">
            <figure className="c-blogroll__postImage">
              <img src="/placeholder.png" alt=""/>
            </figure>
            <date>
              Mar
              <span>05</span>
            </date>
            <h2 className="c-blogroll__heading el-h2">
              <span className="el-small">Inspiration | Web</span>
              <a href="/">
                Our Company Still Has Strongly Faith in Online Advertising
              </a>
            </h2>
            <div className="c-blogroll__postContent">
              <p>Bench mark Bob called an all-hands this afternoon, or performance review nor conversational content get buy-in. Come up with something buzzworthy that's mint, well done but globalize about managing expectations drink from.</p>
              <div className="c-blogroll__meta">
                <div className="c-blogroll__author">
                  <figure className="c-blogroll__authorImage"></figure>
                  By Marco Bowman
                </div>
                <div className="c-blogroll__postDetails">
                  <span className="c-blogroll__postComments el-small">Comments 1</span>
                  <span className="c-blogroll__postLike el-small">Like 3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Blogroll
