import React from 'react'
import { graphql } from "gatsby"
import dayjs from 'dayjs'
import { RichText } from 'prismic-reactjs';

import Layout from "../components/layout"

export default function SinglePostPage({ data }) {
  const { content, first_publication_date } = data.post
  const { post_title, body } = content

  return (
    <Layout title={ post_title[0].text }>
      <section className="c-banner c-banner--home">
        <div className="l-container">
          <div className="c-banner__content">
            <h1 className="el-h1 c-banner__heading">{ post_title[0].text }</h1>
            <span className="c-banner__breadcrumbs">Home / Blog / <span className="c-banner__breadcrumbs--current">{ post_title[0].text }</span></span>
          </div>
        </div>
        <div className="c-banner__infoCard c-banner__infoCard--blogPost">
          <div className="c-banner__infoCardContent">
            <span className="c-banner__infoCardTag">Author</span>
            <p>Kescheler Nix-Powell</p>
          </div>
          <div className="c-banner__infoCardContent">
            <span className="c-banner__infoCardTag">Category</span>
            <p>Art, Inspiration, Design</p>
          </div>
          <div className="c-banner__infoCardContent">
            <span className="c-banner__infoCardTag">Posted</span>
            <p>{dayjs(first_publication_date).format('MM.DD.YYYY')}</p>
          </div>
        </div>
      </section>
      <section className="p-blogPost">
        {body.map((block, index) => {
          switch (block.slice_type) {
            case "quote_block":
              return (
                <section className="p-blogPost__block p-blogPost__block--fullMobile" key={`${block.slice_type}-${index}`}>
                  <div className="l-container">
                    <div className="p-blogPost__quote">
                      <h2 className="p-blogPost__quoteHeading">{block.primary.quote}</h2>
                      <span className="p-blogPost__quoteAuthor">{block.primary.author}, {block.primary.authors_title}</span>
                    </div>
                  </div>
                </section>
              )

            case "image_block":
              if (block.items.length > 1) {
                return (
                  <section className="p-blogPost__block" key={`${block.slice_type}-${index}`}>
                    <div className="l-container">
                      <div className="p-blogPost__imageWrap p-blogPost__imageWrap--multi">
                        {block.items.map((imageItem, index) => (
                          <figure className="p-blogPost__image" key={`image-${index}`}>
                            <img src={imageItem.image.url} alt=""/>
                          </figure>
                        ))}
                      </div>
                    </div>
                  </section>
                )
              } else {
                return (
                  <section className="p-blogPost__block p-blogPost__block--image" key={`${block.slice_type}-${index}`}>
                    <figure className="p-blogPost__image" style={{backgroundImage: `url(${block.items[0].image.url})`}}>
                      <img src={block.items[0].image.url} alt=""/>
                    </figure>
                  </section>
                )
              }

            default:
              return (
                <section className="p-blogPost__block" key={`${block.slice_type}-${index}`}>
                  <div className="l-container">
                    <div className="p-blogPost__copy">
                      {RichText.render(block.primary.content_block)}
                    </div>
                  </div>
                </section>
              )
          }
        })}
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
