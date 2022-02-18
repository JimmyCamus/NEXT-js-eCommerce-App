import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, user }) => {
  return (
    <div>
      <Navbar user={user} />
      <div style={{ minHeight: "80vh", marginBottom: "100px" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
