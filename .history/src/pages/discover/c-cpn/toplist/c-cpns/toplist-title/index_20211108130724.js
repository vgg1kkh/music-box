import React, { memo } from 'react'
import { ToplistTitleWrapper } from './style'

export default memo(function ToplistTitle() {

      // redux hook
  const {titleInfo} = useSelector((state) => ({
    titleInfo: state.getIn(['toplist', 'currentToplistTitleInfo'])
  }), shallowEqual)
    return (
        <ToplistTitleWrapper>
            T
        </ToplistTitleWrapper>
    )
})
