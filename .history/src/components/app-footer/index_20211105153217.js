import { memo } from "react";
import { footerImages, footerLinks } from "../../common/local-data";

import AppFooterWrapper from "./style";

export default memo(function index() {

  const mapFooterLinksFromBGImage=()=>{

  }

  const mapFooterImageFromBGImage=()=>{
    return footerImages.map((item) => (
        <a
          key={item.link}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="text-indent"
        >
          footer image
        </a>
      ))
  }
  return (
    <AppFooterWrapper>
      <div className="content w980">
        <div className="left">
            <ul className="left-items">
            {}
            </ul>
         
          <p>Address</p>
          <p>Telephone number</p>
          <p>Email Address</p>
        </div>
        <ul className="right">
          {mapFooterImageFromBGImage()}
        </ul>
      </div>
    </AppFooterWrapper>
  );
});
