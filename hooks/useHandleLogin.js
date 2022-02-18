const useHandleLogin = () => handleLogin;

const handleLogin = async (email, password) => {
  const response = await fetch(`/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  const data = await response.json();
  return data;
};

export default useHandleLogin;
