import { memo } from "react";

import render
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";

export default memo(function App() {
  return (
    <>
      <AppHeader />
      <AppFooter />
    </>
  );
});
