import { memo,useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'


import { getCategoryAction } from './store/actionCreators'
import SongsHeader from './c-cpns/song-header'
import SongsList from './c-cpns/song-list'
import { PlayListWrapper } from './style'

export default memo(function PlayList(props) {

      // redux
  const dispatch = useDispatch()
  const cat = useLocation().cat


    //local hooks
      // hooks
    useEffect(() => {
    dispatch(getCategoryAction())
    dispatch(getSongList(0))
  }, [dispatch])
    return (
        <PlayListWrapper className="w980">
            <SongsHeader />
            <SongsList />
        </PlayListWrapper>
    )
})
