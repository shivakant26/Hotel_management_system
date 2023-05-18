import { Route, Routes } from "react-router-dom";
import { allRoute } from "../utils/RouteContant";

const MainRoute = () => {
  return (
    <>
      <Routes>
        {allRoute?.map((navigation, index) => {
          return (
            <Route
              key={index}
              path={navigation.path}
              element={navigation.component}
            >
              {navigation?.children?.map((routeItem, index) => {
                return (
                  <Route
                    key={index}
                    path={routeItem.path}
                    element={routeItem.component}
                  />
                );
              })}
            </Route>
          );
        })}
      </Routes>
    </>
  );
};
export default MainRoute;
