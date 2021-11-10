import React, { memo } from 'react'

import { Skeleton } from 'antd';

import { BodyWrapper } from './style'

export default memo(function SongsList() {

    // hooks
  const [currentPage, setCurrentPage] = useState(1);
  
    return (
        <BodyWrapper>
            { !songList.length? <Skeleton active /> : <div className="songs-list">
        {
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
