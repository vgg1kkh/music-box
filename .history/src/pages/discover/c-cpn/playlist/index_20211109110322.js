import React, { memo } from 'react'

import { PlayListWrapper } from './style'

export default memo(function PlayList() {
    return (
        <PlayListWrapper className="w980">
            <HYSongsHeader />
            <HYSongsList />
        </PlayListWrapper>
    )
})
