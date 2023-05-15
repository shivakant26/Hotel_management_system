import { Outlet } from "react-router-dom";
import MainRoute from "../../Routes/MainRoute";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
