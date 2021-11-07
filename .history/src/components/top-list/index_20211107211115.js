import { memo } from 'react'

import { TopListWrapper } from './style'

export default memo(function TopList(props) {
    const {info
    return (
        <TopListWrapper>
            <div className='header'>
                <div className='image-wrapper'></div>
                <div className='titles'></div>
            </div>
            <div className='body'>Content</div>
            <div className='footer'>Footer</div>
        </TopListWrapper>
    )
})
