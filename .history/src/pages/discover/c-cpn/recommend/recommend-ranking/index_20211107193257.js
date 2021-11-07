import { memo } from 'react'

import ThemeHeaderRcm from '@/components/theme-head-rcm'
import TopList from '@/components/top-list'
import { RecommendRankingWrapper } from './style'
export default memo(function RecommendRanking(props) {
    return (
        <RecommendRankingWrapper>
             <ThemeHeaderRcm
        icon={true}
        title="The Board"
        history={props.history}
      />
      <div className="content">
          <TopList />
          <div></div>
          <div></div>
      </div>

        </RecommendRankingWrapper>
    )
})
