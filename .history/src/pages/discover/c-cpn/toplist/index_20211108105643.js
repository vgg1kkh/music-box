import { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual} from "react-redux"

import { getTopListInfoAction } from './store/actionCreators'
import { TopListWrapper, TopLeft, TopRight } from './style'

export default memo(function List() {
  
  //redux hooks
  const dispatch = useDispatch()
  const {toplistInfo} = const state = useSelector(state => state.state)


    // other hook
  useEffect(() => {
    // Get TopList list
    dispatch(getTopListInfoAction())
  }, [dispatch])
    return (
        <TopListWrapper className="wrap-bg2">
            <div className='content w980'>
                <TopLeft>
                    <div className='top-list-container'>
                        LEFT
                    </div>
                </TopLeft>
                <TopRight>RIGHT</TopRight>
            </div>
        </TopListWrapper>
    )
})
