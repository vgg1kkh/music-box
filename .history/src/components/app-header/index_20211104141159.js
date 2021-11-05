import React, { memo } from "react";

import logo from "@/assets/img/logo.jpg"
import {headerNavItems } from "../../common/local-data"
import AppHeaderWrapper from "./style";

export default memo(function index() {
  return (
    <AppHeaderWrapper>
      <div className="content w1100">
        <a className="header-left" href="/">
          <h1 className="header-left-logo">
              <img src={logo} alt="Birdy Music" />
          </h1>
          <h1 className="header-left-title">Birdy Music</h1>
          {/* navs: */}
          <ul className="header-left-nav">
              {headerNavItems.map((item,index) => {
                  if(index<3){
                    return (
                        <li key={item} className="header-left-nav-item">{item}</li>
                    )}
            })
          </ul>
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
