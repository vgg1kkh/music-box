import { memo } from 'react'

import themeHeaderRcm from '@/components/theme-head-rcm'
import { RecommendRankingWrapper } from './style'
export default memo(function RecommendRanking([rp[s]]) {
    return (
        <RecommendRankingWrapper>
            <NewAlbumWrapper>
             <ThemeHeaderRcm
        icon={true}
        title="New Album"
        history={props.history}
      />
        </NewAlbumWrapper>g
        </RecommendRankingWrapper>
    )
})
