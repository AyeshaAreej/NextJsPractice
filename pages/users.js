import { getUsers } from "./api/users-api";

export async function getStaticProps() {
  const users = await getUsers();
  return {
    props: {
      users,
    },
  };
}

function UserList({ users }) {
  return (
    <>
      <h1>List of users</h1>
      {Object.values(users).map((user) => {
        return (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        );
      })}
    </>
  );
}

export default UserList;
