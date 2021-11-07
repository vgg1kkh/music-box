import { memo } from "react";

import { ThemeHeaderRmcWrapper } from "./style";

export default memo(function ThemeHeaderRcm(props) {
  const { icon, title, navItems, right = "More" } = props;

  const handleNavItemClick = navList =>{}
  return (
    <ThemeHeaderRmcWrapper icon={icon}>
      <div className="header-left">
        <div className="icon-left text-indent">bg icon</div>
        <div className="title">{title}</div>
        <div className="nav-list">{
        navItems.map(item=>(
            <div key={item.title} className="nav-item" onClick={()handleNavItemClick}>
                <span className="nav-item-title">{item.title}</span>
                <span className="divider">|</span>
            </div>
        ))
        }
        </div>
      </div>
      <div className="header-right">
        <div className="title-right">{right}</div>
        <i className="icon-right"></i>
      </div>
    </ThemeHeaderRmcWrapper>
  );
});
