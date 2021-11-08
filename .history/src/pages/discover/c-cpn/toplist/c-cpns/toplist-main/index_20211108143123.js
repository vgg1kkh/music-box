import React, { memo } from 'react'
import { useDispatch,shallowEqual } from 'react-redux'
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

      // other hook
  useEffect(() => {
    dispatch(getToplistItemAction(currentToplistId))
  }, [dispatch,currentToplistId])
    return (
        <ToplistMainWrapper>
            Main
        </ToplistMainWrapper>
    )
})
