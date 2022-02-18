const useHandleLogout = () => handleLogout;

const handleLogout = async (cookies, setUser) => {
  await fetch(`/api/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Token: cookies.token,
    },
  });

  setUser({});
};

export default useHandleLogout;
