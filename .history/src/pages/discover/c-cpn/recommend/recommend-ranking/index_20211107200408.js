import { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual} from "react-redux"

import ThemeHeaderRcm from '@/components/theme-head-rcm'
import TopList from '@/components/top-list'
import { RecommendRankingWrapper } from './style'
export default memo(function RecommendRanking(props) {

    //redux-hooks
    const dispatch = useDispatch()
    const { upRankings, newRankings, originRanking } = useSelector(state=>({
        upRankings: state.getIn(["recommend","upRankings"]),
        newRankings: state.getIn(["recommend","newRankings"]),
        originRankings: state.getIn(["recommend","originRankings"])
    }),shallowEqual)

    //other hooks
    useEffect(()=>{
        dispatch(get)
    },[])
    return (
        <RecommendRankingWrapper>
             <ThemeHeaderRcm
        icon={true}
        title="The Board"
        history={props.history}
      />
      <div className="content">
          <TopList />
          <TopList />
          <TopList />
      </div>

        </RecommendRankingWrapper>
    )
})
