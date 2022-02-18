import Profile from "../../components/Profile";

const profile = ({ data, cookies, user, setUser }) => {
  return <Profile data={data} cookies={cookies} user={user} setUser={setUser} />;
};

export default profile;

export const getServerSideProps = async (ctx) => {
  const response = await fetch(`${process.env.API_PROTOCOL}${process.env.API_URL}/sales/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${ctx.req.cookies.token}`,
    }
  });
  const data = await response.json();

  return {
    props: {data: data.data, cookies: ctx.req.cookies },
  };
};
