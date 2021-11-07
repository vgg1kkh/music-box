import { memo } from 'react'

import ThemeHeaderRcm from '../../../../../../components/theme-head-rcm'


import { HotRecommendWrapper } from './style'
export default memo(function HotRecommend() {
    return (
        <HotRecommendWrapper>
            <ThemeHeaderRcm
            icon = {true} 
            title="Recommend"
            navList={["Local", "Hits", "Rock", "Country", "电子"]}
            />
        </HotRecommendWrapper>
    )
})
