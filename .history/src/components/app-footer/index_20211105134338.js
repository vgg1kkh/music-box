import { memo } from "react";
import { footerImages, footerLinks } from "../../common/local-data";

import AppFooterWrapper from "./style";

export default memo(function index() {
  return (
    <AppFooterWrapper>
      <div className="content w980">
        <ul className="left">
            {footerLinks.map((item) => (
              <li key={item.title}>
                <a href={item.link}>{item.title}</a>
                <span className="divider">|</span>
              </li>
            ))}
          <p>P1</p>
          <p>P2</p>
          <p>P3</p>
        </ul>
        <ul className="right">
            {
                footerImages.map(item=>(
                   <a key={item.link} href={item.link} target="">footer image</a> 
                ))
            }
        </ul>
      </div>
    </AppFooterWrapper>
  );
});
