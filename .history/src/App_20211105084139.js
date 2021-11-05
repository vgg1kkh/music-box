import { memo,Suspense } from "react";
import {BrowserRouter} from "react-router-dom"
import {renderRoutes} from "react-router-config"


import { CSSTransition, s } from "react-transition-group";

import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

export default memo(function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Suspense fallback={<div>LOADING</div>}>
      {renderRoutes(routes)}
      </Suspense>
      <button>{isOn? "ON":"OFF"}</button>
      <AppFooter />
    </BrowserRouter>
  );
});
