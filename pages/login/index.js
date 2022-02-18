import LoginForm from "../../components/LoinForm";

const login = ({ user, setUser }) => {
  return <LoginForm setUser={setUser} />;
};

export default login;

export const getServerSideProps = (ctx) => {
  return { props: {} };
};
