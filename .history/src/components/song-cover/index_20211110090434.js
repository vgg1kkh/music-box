import { memo } from "react";
import { Link } from "react-router-dom";
import { getImageSize, getCount } from "../../utils/formatUtils";

import { SongCoverWrapper } from "./style";
export default memo(function SongCover(props) {
  const { info } = props;
  return (
    <SongCoverWrapper>
      <Link to={`/songlist?songlistId=${info.id}`} className="item">
        <div className="image-wrapper">
          <img src={getImageSize(info.picUrl, 140, 140)} alt="" />
          <div className="sprite_cover cover-mask">
            <div className="bottom-bar sprite_cover">
              <span className="left">
                <i className="sprite_icon"></i>
                <span className="count">{getCount(info.playCount)}</span>
              </span>
              <i className="right sprite_icon text-indent">right</i>
            </div>
          </div>
        </div>
        <div className="title">{info.name}</div>
      </Link>
    </SongCoverWrapper>
  );
});
/* songList item sample= 
{name: '韩综 | 换乘恋爱 BGM', id: 6827562995, trackNumberUpdateTime: 1633755698489, status: 0, userId: 111050645, …}
adType: 0
alg: "alg_sq_topn_lr"
anonimous: false
cloudTrackCount: 0
commentCount: 426
commentThreadId: "A_PL_0_6827562995"
coverImgId: 109951166122947260
coverImgId_str: "109951166122947271"
coverImgUrl: "http://p2.music.126.net/YcUi9CkF91Cu-FrZ2EnHAQ==/109951166122947271.jpg"
coverStatus: 3
createTime: 1624682667860
creator: {defaultAvatar: false, province: 110000, authStatus: 0, followed: false, avatarUrl: 'http://p1.music.126.net/lws4X324aUHoL27_ZNhY6g==/109951166080841167.jpg', …}
description: "TVING 恋爱综艺 换乘恋爱"
highQuality: false
id: 6827562995
name: "韩综 | 换乘恋爱 BGM"
newImported: false
ordered: true
playCount: 777074
privacy: 0
recommendInfo: null
shareCount: 175
specialType: 0
status: 0
subscribed: null
subscribedCount: 15229
subscribers: [{…}]
tags: (3) ['韩语', '流行', '综艺']
totalDuration: 0
trackCount: 475
trackNumberUpdateTime: 1633755698489
trackUpdateTime: 1636504494778
tracks: null
updateTime: 1633755698489
userId: 111050645 */