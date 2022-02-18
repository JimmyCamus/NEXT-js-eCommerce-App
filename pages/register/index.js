import RegisterForm from "../../components/RegisterForm";

const register = () => {
  return <RegisterForm />;
};

export default register;

export const getServerSideProps = () => {
  return { props: {} };
};
