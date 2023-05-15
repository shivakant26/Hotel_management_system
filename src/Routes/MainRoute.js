import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Hotel from "../pages/Hotel";
import Resort from "../pages/Resort";
import Events from "../pages/Events";
import Contact from "../pages/Contact";
import Layout from "../component/Layout/Index";
import PageNotFound from "../pages/404";
import Room from "../pages/Room";
const MainRoute = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/hotel" element={<Hotel />} />
        <Route path="/resort" element={<Resort />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
};
export default MainRoute;
