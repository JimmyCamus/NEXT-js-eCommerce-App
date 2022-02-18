import EditProfileForm from "../../../components/EditProfileForm";

const editUser = ({ user, setUser, cookies }) => {
  return <EditProfileForm user={user} setUser={setUser} cookies={cookies} />;
};

export default editUser;

export const getServerSideProps = async (ctx) => {
  return {
    props: { cookies: ctx.req.cookies },
  };
};
