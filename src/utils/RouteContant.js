import Layout from "../component/Layout/Index";
import PageNotFound from "../pages/404";
import Contact from "../pages/Contact";
import Events from "../pages/Events";
import Home from "../pages/Home";
import Hotel from "../pages/Hotel";
import Resort from "../pages/Resort";
import RoomOverviewColumn from "../pages/RoomOverviewColumn";
import RoomOverviewList from "../pages/RoomOverviewList";

export const allRoute = [
  {
    path: "",
    component: <Layout />,
    children: [
      {
        path: "",
        component: <Home />,
      },
      {
        path: "/hotel",
        component: <Hotel />,
      },
      {
        path: "/resort",
        component: <Resort />,
      },
      {
        path: "/events",
        component: <Events />,
      },
      {
        path: "/contact",
        component: <Contact />,
      },
      {
        path: "/room-overview-list",
        component: <RoomOverviewList />,
      },
      {
        path: "/room-overview-column",
        component: <RoomOverviewColumn />,
      },
      {
        path: "*",
        component: <PageNotFound />,
      },
    ],
  },
];
