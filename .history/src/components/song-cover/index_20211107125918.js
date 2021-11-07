import { memo } from "react";
import { Link } from "react-router-dom";
import { getImageSize } from "../../utils/getImageSize";

import { SongCoverWrapper } from "./style";
export default memo(function SongCover(props) {
  const { info } = props;
  console.log(info);
  return (
    <SongCoverWrapper>
      <Link to={`/songlist?songlistId=${}`}>
        <img src={getImageSize(info.picUrl, 140, 140)} alt=""></img>
        <p className="title">{info.name}</p>
      </Link>
    </SongCoverWrapper>
  );
});
