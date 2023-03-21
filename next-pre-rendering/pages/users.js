import User from "@/components/user";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Link from "next/link";

const Users = ({ users }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h2>
          <Link href="/">Home</Link>
        </h2>
        <h1>Users</h1>
        {users.map((user) => (
          <div key={user.id}>
            <User user={user} />
          </div>
        ))}
      </main>
    </>
  );
};

export default Users;

/// Runs only at build time
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}