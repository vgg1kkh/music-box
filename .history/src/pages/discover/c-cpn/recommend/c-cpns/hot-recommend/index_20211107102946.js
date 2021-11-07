import { memo } from 'react'

import ThemeHeaderRcm from '../../../../../../components/theme-head-rcm'


import { HotRecommendWrapper } from './style'
export default memo(function HotRecommend() {
    return (
        <HotRecommendWrapper>
            <ThemeHeaderRcm
            icon = {true} 
            title="Recommend"
            navList={["Local", "流行", "摇滚", "民谣", "电子"]}
            />
        </HotRecommendWrapper>
    )
})
