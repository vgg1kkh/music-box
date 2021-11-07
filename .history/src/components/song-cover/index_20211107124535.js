import { memo } from "react";
import { Link}
import { getImageSize } from "../../utils/getImageSize";

import { SongCoverWrapper } from "./style";
export default memo(function SongCover(props) {
  const { info } = props;
  console.log(info);
  return (
    <SongCoverWrapper>
      <Link>
        <img src={getImageSize(info.picUrl, 140, 140)} alt=""></img>
        <p className="title">{info.name}</p>
      </Link>
    </SongCoverWrapper>
  );
});
