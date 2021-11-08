import React, { memo } from 'react'

import { TopListWrapper, TopLeft, TopRight } from './style'

export default memo(function List() {
    return (
        <TopListWrapper className="wrap-bg2">
            <div className='content w980'>
                <TopLeft>
                    <div className='top-list-container'></div>LEFT</TopLeft>
                <TopRight>RIGHT</TopRight>
            </div>
        </TopListWrapper>
    )
})
