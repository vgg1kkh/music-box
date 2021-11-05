import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/img/logo.jpg";
import { headerNavItems } from "../../common/local-data";
import { FaSearch } from "react-icons/fa";
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
            
          </div>
          
        </div>
      </div>
    </AppHeaderWrapper>
  );
});
