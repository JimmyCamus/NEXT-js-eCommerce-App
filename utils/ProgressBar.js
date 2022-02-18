import "nprogress/nprogress.css";
import NProgress from "nprogress";
import Router from "next/router";
import { debounce } from "lodash";

const ProgressBar = () => {
  const start = debounce(NProgress.start, 200);
  const end = () => {
    start.cancel();
    NProgress.done();
  };

  Router.events.on("routeChangeStart", start);
  Router.events.on("routeChangeComplete", end);
  Router.events.on("routeChangeError", end);

  return () => {
    Router.events.off("routeChangeStart", start);
    Router.events.off("routeChangeComplete", end);
    Router.events.off("routeChangeError", end);
  };
};

export default ProgressBar;
