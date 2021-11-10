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
          console.log(songList.)
          songList.map((item, index) => {
            return (
              // <HYThemeCover info={item} key={item.id} right="30px" />
              
              <SongCover info={item} />
            )
          })
        }
      </div>}
        </BodyWrapper>
    )
})
