import React, { memo ,useState} from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Skeleton } from 'antd';

import SongCover from '@/components/song-cover'
import { BodyWrapper } from './style'

export default memo(function SongsList() {

    // hooks
  const [currentPage, setCurrentPage] = useState(1);

    // redux
    const { categorySongs } = useSelector(state => ({
        categorySongs: state.getIn(["playList", "categorySongs"])
      }), shallowEqual);
      const songList = categorySongs.playlists || [];
      const total = categorySongs.total || 0;
      const dispatch = useDispatch();

    return (
        <BodyWrapper>
            { !songList.length? <Skeleton active /> : <div className="songs-list">
        {
          songList.map((item, index) => {
            return (
              // <HYThemeCover info={item} key={item.id} right="30px" />
              
              <SongCover key={item.id} info={item} />
            )
          })
        }
        {console.log("songList item sample=",songList[0])}
      </div>}
        </BodyWrapper>
    )
})
songList item sample= 
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
userId: 111050645