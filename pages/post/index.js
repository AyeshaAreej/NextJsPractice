import { getPosts } from "../api/posts-api";

export async function getStaticProps() {
  const posts = await getPosts();
  return {
    props: {
      posts,
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
              <b>Title: </b>
              {post.title}
            </p>
            <p>
              <b>Body: </b>
              {post.body}
            </p>
          </div>
        );
      })}
    </>
  );
}

export default Post;
