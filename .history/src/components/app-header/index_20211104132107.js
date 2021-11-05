import React, { memo } from "react";

import AppHeaderWrapper from "./style";

export default memo(function index() {
  return (
    <AppHeaderWrapper>
      <div className="content w1100">
        <div className="header-left">
          <h1 className="header-left">
              Logo
          </h1>
          <h1>Title</h1>
          <div className="header-nav">NAV</div>
        </div>
        <div className="header-right">
          <div>Search Engine</div>
          <button className="creator">Creator</button>
          <button className="login">Login</button>
        </div>
      </div>
    </AppHeaderWrapper>
  );
});
