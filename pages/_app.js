import "../styles/globals.css";
import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../themes/ThemeConfig";
import witheTheme from "../themes/whiteTheme";
import Layout from "../components/Layout";
import GetUser from "../utils/GetUser";
import ProgressBar from "../utils/ProgressBar";

function MyApp({ Component, pageProps, userData }) {
  const [user, setUser] = useState(userData);
  useEffect(ProgressBar, []);

  return (
    <ThemeProvider theme={witheTheme}>
      <GlobalStyles />
      <Layout user={user}>
        <Component {...pageProps} user={user} setUser={setUser} />
      </Layout>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  const data = await GetUser(ctx.req.cookies.token);
  return {
    userData: data,
  };
};

export default MyApp;
