import React, { memo } from 'react'

import { TopListWrapper, T } from './style'

export default memo(function List() {
    return (
        <TopListWrapper className="wrap-bg2">
            <div className='w980'>
                <TopLeft></TopLeft>
                <TopRight></TopRight>
            </div>
        </TopListWrapper>
    )
})
