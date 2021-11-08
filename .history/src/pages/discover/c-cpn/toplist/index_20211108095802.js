import React, { memo } from 'react'

import { TopListWrapper, TopLeft, TopRight } from './style'

export default memo(function List() {
    return (
        <TopListWrapper className="wrap-bg2">
            <div className='content w980'>
                <TopLeft>
                    <div></div>LEFT</TopLeft>
                <TopRight>RIGHT</TopRight>
            </div>
        </TopListWrapper>
    )
})
