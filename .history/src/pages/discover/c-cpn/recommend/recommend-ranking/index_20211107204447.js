import { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual} from "react-redux"

import ThemeHeaderRcm from '@/components/theme-head-rcm'
import TopList from '@/components/top-list'
import { RecommendRankingWrapper } from './style'
import { getTopListDetailAction } from '../store/actionCreators'
export default memo(function RecommendRanking(props) {

    //redux-hooks
    const dispatch = useDispatch()
    const { upRankings, newRankings, originRanking } = useSelector(state=>({
        upRankings: state.getIn(["recommend","upRankings"]),
        newRankings: state.getIn(["recommend","newRankings"]),
        ooriginRankings: state.getIn(["recommend","originRankings"])
    }),shallowEqual)

    //other hooks
    useEffect(()=>{
        dispatch(getTopListDetailAction(19723756))
        dispatch(getTopListDetailAction(3779629))
        dispatch(getTopListDetailAction(2884035))
    },[dispatch])
    return (
        <RecommendRankingWrapper>
             <ThemeHeaderRcm
        icon={true}
        title="The Board"
        history={props.history}
      />
      <div className="content">
          <TopList info={upRankings}/>
          <TopList info={newRankings}/>
          <TopList info={originRankings}/>
      </div>

        </RecommendRankingWrapper>
    )
})
