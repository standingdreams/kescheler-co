import React from "react"
import { graphql } from "gatsby"
import dayjs from "dayjs"
import { PropTypes } from "prop-types"

import Layout from "../components/layout"
import Breadcrumbs from "../components/breadcrumbs"
import Pagination from "../components/Pagination"

const Blog = ({ data, pageContext }) => {
  const postsPerPage = data.prismicGlobal.data.posts_per_page
  const postsCount = data.posts.totalCount
  const totalPages = Math.ceil(postsCount / postsPerPage)

  return (
    <Layout title="Blog" bodyClass="blog">
      <Breadcrumbs />
      <section className="c-blogroll">
        <div className="l-container c-blogroll__grid">
          {data.posts.edges.map(post => {
            const imageBlock = post.node.content.body.filter(bodyContent => bodyContent.slice_type === "image_block")

            return (
              <div className="c-blogroll__post" key={post.node.id}>
                {imageBlock.length > 0 && (
                  <figure className="c-blogroll__postImage">
                    <img src={imageBlock[0].items[0].image.url} alt="" />
                  </figure>
                )}
                <div className="c-blogroll__date">
                  {dayjs(post.node.first_publication_date).format("MMM")}
                  <span>{dayjs(post.node.first_publication_date).format("DD")}</span>
                </div>
                <h2 className="c-blogroll__heading el-h2">
                  <span className="el-small">
                    {post.node.tags.map((tag, index) => (index === 0 ? tag : ` | ${tag}`))}
                  </span>
                  <a href={`/post/${post.node.uid}`}>{post.node.content.post_title[0].text}</a>
                </h2>
                <div className="c-blogroll__postContent">
                  <p>{post.node.content.excerpt[0].text}</p>
                  <div className="c-blogroll__meta">
                    <div className="c-blogroll__author">By Kescheler Nix-Powell</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {totalPages > 1 && (
          <Pagination
            base="/blog"
            currentPage={pageContext.currentPage || 1}
            postsPerPage={postsPerPage}
            skip={pageContext.skip}
            postsCount={postsCount}
          />
        )}
      </section>
    </Layout>
  )
}

Blog.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

export default Blog

export const query = graphql`
  query($skip: Int = 0, $postsPerPage: Int = 10) {
    posts: allPrismicBlogPosts(limit: $postsPerPage, skip: $skip) {
      totalCount
      edges {
        node {
          id
          uid
          first_publication_date
          tags
          content: data {
            post_title {
              text
            }
            excerpt {
              text
            }
            body {
              slice_type
              primary {
                author
                content_block {
                  text
                  type
                }
              }
              items {
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
    prismicGlobal {
      data {
        posts_per_page
      }
    }
  }
`
