import path from 'path'

async function postsIntoPages({ graphql, actions }) {
  const postTemplate = path.resolve('./src/templates/BlogPosts.js');
  const { data } = await graphql(`
    query {
      posts: allPrismicBlogPosts {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  data.posts.edges.forEach(post => {
    console.log(`Creating a page for /post/${post.node.uid}`);
    actions.createPage({
      path: `post/${post.node.uid}`,
      component: postTemplate,
      context: {
        id: post.node.id,
      }
    });
  });
}

async function paginationForBlog({ graphql, actions }) {
  const { data } = await graphql(`
    query {
      posts: allPrismicBlogPosts {
        totalCount
        edges {
          node {
            id
            uid
          }
        }
      }
      prismicGlobal {
        data {
          posts_per_page
        }
      }
    }
  `)
  const postsPerPage = data.prismicGlobal.data.posts_per_page
  const totalPages = Math.ceil(data.posts.totalCount / postsPerPage);
  console.log(`There are ${data.posts.totalCount} posts. We have ${totalPages} posts per page.`);
  Array.from({ length: totalPages }).forEach((_, i) => {
    console.log(`Creating page ${i}`);
    actions.createPage({
      path: `/blog/${i + 1}`,
      component: path.resolve('./src/pages/blog.js'),
      context: {
        currentPage: i + 1,
        totalPages,
        postsPerPage,
        skip: i * postsPerPage,
        postsCount: data.posts.totalCount,
      },
    })
  })
}

export async function createPages(params) {
  await Promise.all([
    postsIntoPages(params),
    paginationForBlog(params),
  ]);
}