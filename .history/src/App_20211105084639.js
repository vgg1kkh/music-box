import { memo, Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import { CSSTransition, SwitchTransition } from "react-transition-group";
import ""


import routes from "./router";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

export default memo(function App() {
  const [isOn, setIsOn] = useState(false);
  return (
    <BrowserRouter>
      <AppHeader />
      <Suspense fallback={<div>LOADING</div>}>{renderRoutes(routes)}</Suspense>
      <SwitchTransition>
        <CSSTransition
          key={isOn ? "ON" : "OFF"}
          classNames="btn"
          timeout={1000}
        >
          <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
        </CSSTransition>
      </SwitchTransition>

      <AppFooter />
    </BrowserRouter>
  );
});
