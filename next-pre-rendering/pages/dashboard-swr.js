import useSwr from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  return data;
};

const DashboardSwr = () => {
  const { data, error } = useSwr("dashboard", fetcher);

  if (error) return <p>Failed to load. Error occurs</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>Dashboard SWR</h1>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Following - {data.following}</h2>
      <h2>Followers - {data.followers}</h2>
    </div>
  );
};

export default DashboardSwr;
