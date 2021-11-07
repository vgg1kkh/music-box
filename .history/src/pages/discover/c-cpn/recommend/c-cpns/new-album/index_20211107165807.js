import { memo } from "react";

import ThemeHeaderRcm from "@/components/theme-head-rcm";

import { NewAlbumWrapper } from "./style";
export default memo(function HotRecommend(props) {
  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm icon={true} title="New Album" history={props.history} />
      <div className="content">
          <div className="inner">
              <button className="button-left">Left</button>
              <button className="button-left">Right</button>
          </div>
      </div>
    </NewAlbumWrapper>
  );
});
