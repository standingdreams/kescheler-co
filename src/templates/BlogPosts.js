import React from 'react'
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function SinglePostPage({ data }) {
  const { content, first_publication_date } = data.post
  const { post_title, body } = content
  console.log(post_title);
  return (
    <Layout>
      <section className="p-blogPost__header">
        <div className="l-container">
          <h1 className="p-blogPost__heading">{post_title[0].text}</h1>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    post: prismicBlogPosts(id: {eq: $id}) {
      first_publication_date
      type
      content: data {
        post_title {
          text
        }
        body {
          slice_type
          primary {
            content_block {
              type
              text
              spans {
                type
                start
                end
              }
            }
            author
            authors_title
            quote
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
`