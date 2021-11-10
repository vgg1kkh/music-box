import { memo,useEffect } from 'react'
import SongsHeader from './c-cpns/song-header'
import SongsList from './c-cpns/song-list'
import { PlayListWrapper } from './style'

export default memo(function PlayList(props) {


    //local hooks
      // hooks
    useEffect(() => {
    dispatch(getCategory())
    dispatch(getSongList(0))
  }, [dispatch])
    return (
        <PlayListWrapper className="w980">
            <SongsHeader />
            <SongsList />
        </PlayListWrapper>
    )
})
