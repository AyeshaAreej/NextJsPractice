import { getPosts } from "../api/posts-api";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts: posts.slice(0, 3),
    },
  };
}

function Post({ posts }) {
  return (
    <>
      <h1>List of Posts</h1>
      {Object.values(posts).map((post) => {
        return (
          <div key={post.id}>
            <p>
              <b> {post.id} </b>
              {post.title}
            </p>
            <hr />
          </div>
        );
      })}
    </>
  );
}

export default Post;
