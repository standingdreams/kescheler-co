import path from 'path'

async function postsIntoPages({ graphql, actions }) {
  const postTemplate = path.resolve('./src/templates/BlogPosts.js');
  const { data } = await graphql(`
    query {
      posts: allPrismicBlogPosts {
        edges {
          node {
            id
            slugs
          }
        }
      }
    }
  `)
  console.log(data.posts.edges);

  data.posts.edges.forEach(post => {
    console.log(`Creating a page for http://localhost:8000/post/${post.node.slugs[0]}`);
    actions.createPage({
      path: `post/${post.node.slugs[0]}`,
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