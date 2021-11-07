import { memo } from 'react'

import { TopListWrapper } from './style'

export default memo(function TopList() {
    return (
        <TopListWrapper>
            <div className='header'>Header</div>
            <div className='content'>Content</div>
        </TopListWrapper>
    )
})
