import { memo } from "react";
import { footerImages, footerLinks } from "../../common/local-data";

import AppFooterWrapper from "./style";

export default memo(function index() {

  const mapFooterLinksFromBGImage = () => {
    return footerLinks.map((item,index) => (
      <li key={index} className="left-item">
        <a href={item.link}>{item.title}</a>
        <span className="divider">|</span>
      </li>
    ));
  };

  const mapFooterImageFromBGImage = () => {
    return footerImages.map((item,index) => (
      <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noreferrer"
        className="text-indent"
      >
        footer image
      </a>
    ));
  };
  return (
    <AppFooterWrapper>
      <div className="content w980">
        <div className="left">
          <ul className="left-items">{mapFooterLinksFromBGImage()}</ul>
          <p>Address</p>
          <p>Telephone number</p>
          <p>Email Address</p>
        </div>
        <ul className="right">{mapFooterImageFromBGImage()}</ul>
      </div>
    </AppFooterWrapper>
  );
});
