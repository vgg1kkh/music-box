import React, { memo } from 'react'
import MineWrapper from './style'

export default memo(function Mine() {
    return (
        <MineWrapper>
            <div className="content text-indent">My Music</div>
        </MineWrapper>
    )
})
