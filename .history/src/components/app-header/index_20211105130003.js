import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import logo from "@/assets/img/logo.jpg";
import { headerNavItems } from "../../common/local-data";
import { FaSearch } from "react-icons/fa";
import AppHeaderWrapper from "./style";

export default memo(function index() {
  return (
    <AppHeaderWrapper>
      <div className="content w1100">
        <div className="header-left" >
        <NavLink className="header-left-link" to="/">
          <h1 className="header-left-logo">
            <img src={logo} alt="Birdy Music" />
          </h1>
          <h1 className="header-left-title">Birdy Music</h1>
        </NavLink>
          {/* navs: */}
          <ul className="header-left-nav">
            {sh}
            {headerNavItems.map((item, index) => {
              if (index < 3) {
                return (
                  <li key={item.title} className="header-left-nav-item">
                    <NavLink to={item.link}>{item.title}</NavLink>
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
          <div className="search-wrapper">
            <i><FaSearch size="1.5em" /></i>
            <input type="text" 
            className="search-wrapper-content"
            placeholder="Search your Fav Song here"/>
          </div>
          <button className="creator">
              Creator</button>
          <div className="login">
            <button className="login-button">
                Login
            </button>
            <ul className="login-drowdown-box">
                <li className="login-drowdown-item">To Be Complete</li>
                <li className="login-drowdown-item">To Be Complete</li>
            </ul>
          </div>
          
        </div>
      </div>
    </AppHeaderWrapper>
  );
});
