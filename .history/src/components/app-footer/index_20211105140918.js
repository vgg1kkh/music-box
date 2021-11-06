import { memo } from "react";
import { footerImages, footerLinks } from "../../common/local-data";

import AppFooterWrapper from "./style";

export default memo(function index() {
  return (
    <AppFooterWrapper>
      <div className="content w980">
        <div className="left">
            <ul className="left-items">
            {footerLinks.map((item) => (
            <li key={item.title} className="left-item">
              <a href={item.link} >{item.title}</a>
              <span className="divider">|</span>
            </li>
          ))}
            </ul>
         
          <p>P1</p>
          <p>P2</p>
          <p>P3</p>
        </div>
        <ul className="right">
          {footerImages.map((item) => (
            <a
              key={item.link}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text"
            >
              footer image
            </a>
          ))}
        </ul>
      </div>
    </AppFooterWrapper>
  );
});
