import { memo } from "react";
import { Link } from "react-router-dom";
import { getImageSize } from "../../utils/getImageSize";

import { SongCoverWrapper } from "./style";
export default memo(function SongCover(props) {
  const { info } = props;
  console.log(info);
  return (
    <SongCoverWrapper>
      <Link to={`/songlist?songlistId=${info.id}`} className="item">
        <div className="image-wrapper">
          <img src={getImageSize(info.picUrl, 140, 140)} alt=""/>
          <div className="sprite_cover cover-mask text-indent">
                <div className="bottom-bar sprite_cover">
                    <span className="left">
                        <i className="sprite_icon"></i>
                        left
                    </span>
                    <i className="right spritetext-indent">right</i>
                </div>
          </div>
        </div>
        <div className="title">{info.name}</div>
      </Link>
    </SongCoverWrapper>
  );
});
