import React, { memo } from 'react'
import use
import { ToplistMainWrapper } from './style'

export default memo(function ToplistMain() {

    const dispatch = useDispatch()
    const { playCount, currentToplistId, currentToplist } = useSelector(
      (state) => ({
        playCount: state.getIn([
          'toplist',
          'currentToplistTitleInfo',
          'playCount',
        ]),
        currentToplistId: state.getIn(['toplist', 'currentToplistId']),
        currentToplist: state.getIn(['toplist', 'currentToplist'])
      }),
      shallowEqual
    )
    return (
        <ToplistMainWrapper>
            Main
        </ToplistMainWrapper>
    )
})
