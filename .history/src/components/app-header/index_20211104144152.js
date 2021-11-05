import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/img/logo.jpg";
import { headerNavItems } from "../../common/local-data";
import AppHeaderWrapper from "./style";

export default memo(function index() {
  return (
    <AppHeaderWrapper>
      <div className="content w1100">
        <div className="header-left" >
        <a className="header-left-link" href="/">
          <h1 className="header-left-logo">
            <img src={logo} alt="Birdy Music" />
          </h1>
          <h1 className="header-left-title">Birdy Music</h1>
        </a>
          {/* navs: */}
          <ul className="header-left-nav">
            {headerNavItems.map((item, index) => {
              if (index < 3) {
                return (
                  <li key={item.title} className="header-left-nav-item">
                    <Link to={item.link}>{item.title}</Link>
                  </li>
                );
              } else {
                return (
                  <li key={item.title} className="header-left-nav-item">
                    <a target="_blank" href={item.link} rel="noreferrer">
                      {item.title}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className="header-right">
          <div className="header-right-search">
              <input type="text"     />
          </div>
          <button className="creator">Creator</button>
          <button className="login">Login</button>
        </div>
      </div>
    </AppHeaderWrapper>
  );
});
