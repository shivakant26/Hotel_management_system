import { Route, Routes } from "react-router-dom";
import { allRoute } from "../utils/RouteContant";
import { Suspense } from "react";

const MainRoute = () => {
  return (
    <>
      <Suspense fallback={<></>}>
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
      </Suspense>
    </>
  );
};
export default MainRoute;
