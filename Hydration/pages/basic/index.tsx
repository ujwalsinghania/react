// data fetched from an external data source using `getServerSideProps`

interface Props {
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
  }[];
  error: string;
}

const Basic = ({ users, error }: Props) => {
  return (
    <section>
      <header>
        <h1>List of users</h1>
      </header>
      {error && <div>There was an error.</div>}
      {!error && users && (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => (
              <tr key={key}>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    // Pass data to the page via props
    return { props: { users: data, error: "" } };
  } catch (error) {
    return { props: { users: [], error: "Failed to fetch users" } };
  }
}

export default Basic;
