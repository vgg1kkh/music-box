import { memo } from "react";
import { footerLinks } from "../../common/local-data";

import AppFooterWrapper from "./style";

export default memo(function index() {
  return (
    <AppFooterWrapper>
      <div className="content w980">
        <div className="left">
          <ul>
            {footerLinks.map((item) => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
                <span className="divider">|</span>
              </li>
            ))}
          </ul>
          <p>1</p>
          <p>2</p>
          <p>3</p>
        </div>
        <div className="right"></div>
      </div>
    </AppFooterWrapper>
  );
});
