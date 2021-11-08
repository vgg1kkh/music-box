import React, { memo } from 'react'
import { useSelector,shallowEqual } from 'react-redux'
import { ToplistTitleWrapper } from './style'

export default memo(function ToplistTitle() {

      // redux hook
  const {titleInfo} = useSelector((state) => ({
    titleInfo: state.getIn(['toplist', 'currentToplistTitleInfo'])
  }), shallowEqual)


    // other handle
    const picUrl = titleInfo && titleInfo.coverImgUrl;
    const name = titleInfo && titleInfo.name;
    const updateTime = titleInfo && titleInfo.trackNumberUpdateTime;
    const commentCount = titleInfo && titleInfo.commentCount;
    const shareCount = titleInfo && titleInfo.shareCount;
    const subscribedCount = titleInfo && titleInfo.subscribedCount;
    return (
        <ToplistTitleWrapper>
            
        </ToplistTitleWrapper>
    )
})
