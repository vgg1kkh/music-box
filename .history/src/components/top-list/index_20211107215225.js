import { memo } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getImageSize } from "../../utils/formatUtils";
import { TopListWrapper } from "./style";

export default memo(function TopList(props) {
  const { info } = props;
  return (
    <TopListWrapper bgUrl={getImageSize(info.coverImgUrl, 80, 80)}>
      <div className="header">
        <div className="image-wrapper"></div>
        <div className="titles">
          <Link to="/#" className="link">
            {info.name}
          </Link>
          <div className="btns">
            <span className="play sprite_02"></span>
            <span className="fav sprite_02"></span>
          </div>
        </div>
      </div>
      <ul className="body">
        {info &&
          info.tracks.slice(0,10).map((item, index) => (
            <li key={item.id} className="list-item">
              <span>{index + 1}</span>
              <Link to="">{item.name}</Link>
            </li>
          ))}
      </ul>
      <div className="footer">Footer</div>
    </TopListWrapper>
  );
});
