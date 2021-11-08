import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { FieldTimeOutlined } from "@ant-design/icons";

import { getImageSize ,formatMonthDay} from "../../../../../../utils/formatUtils";
import { ToplistTitleWrapper } from "./style";

export default memo(function ToplistTitle() {
  // redux hook
  const { titleInfo } = useSelector(
    (state) => ({
      titleInfo: state.getIn(["toplist", "currentToplistTitleInfo"]),
    }),
    shallowEqual
  );

  // other handle
  const picUrl = titleInfo && titleInfo.coverImgUrl;
  const name = titleInfo && titleInfo.name;
  const updateTime = titleInfo && titleInfo.trackNumberUpdateTime;
  const commentCount = titleInfo && titleInfo.commentCount;
  const shareCount = titleInfo && titleInfo.shareCount;
  const subscribedCount = titleInfo && titleInfo.subscribedCount;
  return (
    <ToplistTitleWrapper>
      <div className="title-image">
        <img src={getImageSize(picUrl, 150)} alt="" />
        <div className="image_cover msk"></div>
      </div>
      <div className="title-info">
        <h2>{name}</h2>
        <div className="update-info">
          <FieldTimeOutlined className="timer" />
          Update at: {formatMonthDay(updateTime)}
        </div>
        <div className="controls">
          <div className="sprite_button play">
            <i className="sprite_button1 inner">
              <em className="sprite_button play-icon"></em>
              PLAY
            </i>
          </div>
          <div className="sprite_button favorite">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>(
              {subscribedCount})
            </i>
          </div>
          <div className="sprite_button share">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>({shareCount})
            </i>
          </div>
          <div className="sprite_button download">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>
              DOWNLOAD
            </i>
          </div>
          <div className="sprite_button comment">
            <i className="sprite_button inner">
              <em className="sprite_button favorite-icon"></em>({commentCount})
            </i>
          </div>
        </div>
      </div>
    </ToplistTitleWrapper>
  );
});
