import { memo } from "react";

import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { ThemeHeaderRmcWrapper } from "./style";

export default memo(function ThemeHeaderRcm(props) {
  const { icon, title, navItems, right = "More" } = props;


  return (
    <ThemeHeaderRmcWrapper icon={icon}>
      <div className="header-left">
        <div className="icon-left text-indent">bg icon</div>
        <div className="title">{title}</div>
        <div className="nav-list">
          { navItemnavItems.map((item) => (
            <NavLink
              to={`/discover/songs?albumName=${item.link}`}
              key={item.title}
              className="nav-item"            
            >
              <span className="nav-item-title">{item.title}</span>
              <span className="divider">|</span>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="header-right">
        <div className="title-right">{right}</div>
        <i className="icon-right"></i>
      </div>
    </ThemeHeaderRmcWrapper>
  );
});
