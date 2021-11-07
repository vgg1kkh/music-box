import { memo } from 'react'

import ThemeHeaderRcm from '@/components/theme-head-rcm'
import { RecommendRankingWrapper } from './style'
export default memo(function RecommendRanking(props) {
    return (
        <RecommendRankingWrapper>
             <ThemeHeaderRcm
        icon={true}
        title="New Album"
        history={props.history}
      />

        </RecommendRankingWrapper>
    )
})
