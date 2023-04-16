import { getUsers } from "./api/users-api";
import User from "../components/user";
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
            <User user={user} />
          </div>
        );
      })}
    </>
  );
}

export default UserList;
