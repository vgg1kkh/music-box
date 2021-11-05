import { memo } from "react";

import { rend } from "react-router-config"


import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

export default memo(function App() {
  return (
    <>
      <AppHeader />
      {renderRoutes(routes)}
      <AppFooter />
    </>
  );
});
