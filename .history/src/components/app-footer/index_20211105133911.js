import { memo } from "react";
import { footerLinks } from "../../common/local-data";

import AppFooterWrapper from "./style";

export default memo(function index() {
  return (
    <AppFooterWrapper>
      <div className="content w980">
        <div className="left">
            {footerLinks.map((item) => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
                <span className="divider">|</span>
              </li>
            ))}
          <p>P1</p>
          <p>P2</p>
          <p>P3</p>
        </div>
        <ul className="right">
            
        </ul>
      </div>
    </AppFooterWrapper>
  );
});
