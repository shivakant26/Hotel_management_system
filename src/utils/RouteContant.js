import React from "react";
const Events = React.lazy(() => import("../pages/Events"));
const PageNotFound = React.lazy(() => import("../pages/404"));
const Layout = React.lazy(() => import("../component/Layout/Index"));
const Contact = React.lazy(() => import("../pages/Contact"));
const Home = React.lazy(() => import("../pages/Home"));
const Hotel = React.lazy(() => import("../pages/Hotel"));
const Resort = React.lazy(() => import("../pages/Resort"));
const RoomOverviewColumn = React.lazy(() =>
  import("../pages/RoomOverviewColumn")
);
const RoomOverviewList = React.lazy(() => import("../pages/RoomOverviewList"));
const Room = React.lazy(() => import("../pages/Room"));

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
        path: "room/:url",
        component: <Room />,
      },
      {
        path: "*",
        component: <PageNotFound />,
      },
    ],
  },
];
