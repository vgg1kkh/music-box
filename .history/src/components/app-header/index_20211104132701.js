import React, { memo } from "react";

import AppHeaderWrapper from "./style";

export default memo(function index() {
  return (
    <AppHeaderWrapper>
      <div className="content w1100">
        <a className="header-left">
          <h1 className="header-left-logo">
              <img></>
          </h1>
          <h1 className="header-left-title">Title</h1>


          <div className="header-left-nav">NAV</div>
        </a>
        <div className="header-right">
          <div>Search Engine</div>
          <button className="creator">Creator</button>
          <button className="login">Login</button>
        </div>
      </div>
    </AppHeaderWrapper>
  );
});
