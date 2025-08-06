// import { client } from "@repo/db/client";


export default async function Home() {
  // const user = await client.user.findMany();
  // const userMap = user.map((user) => ({
  //   username: user.username,
  //   password: user.password,
  // }));
  
  return (
    <div>
      <h1>This is the list of users in the database</h1>
      {/* {userMap.map((user: any) => (
        <div key={user.username}>
          <h1>auto deploy</h1>
          <h2>user name is {user.username} and password is {user.password}</h2>
        </div>
      ))} */}
      <p>Database connection temporarily disabled for build testing</p>
    </div>
  );
}