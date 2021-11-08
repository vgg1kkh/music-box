import { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual} from "react-redux"

import { getTopListInfoAction } from './store/actionCreators'
import { TopListWrapper, TopLeft, TopRight } from './style'

export default memo(function List() {
  
  const dispatch = useDispatch()


    // other hook
  useEffect(() => {
    // 榜单item
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
