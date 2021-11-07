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
        <img src={getImageSize(info.picUrl, 140, 140)} alt=""></img>
        <div className="title">"{info.name}</div>
      </Link>
    </SongCoverWrapper>
  );
});
