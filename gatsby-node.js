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

export async function createPages(params) {
  await postsIntoPages(params);
}