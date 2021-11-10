import { memo } from 'react'
import SongsHeader from './c-cpns/song-header'
import SongsList from './c-cpns/song-list'
import { PlayListWrapper } from './style'

export default memo(function PlayList() {


    
    return (
        <PlayListWrapper className="w980">
            <SongsHeader />
            <SongsList />
        </PlayListWrapper>
    )
})
