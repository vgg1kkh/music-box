import { memo } from 'react'

import ThemeHeaderRcm from '../../../../../../components/theme-head-rcm'


import { HotRecommendWrapper } from './style'
export default memo(function HotRecommend() {
    return (
        <HotRecommendWrapper>
            <ThemeHeaderRcm
            icon = {true} 
            title="Recommend"
            navList={["Local", "Hits", "Rock", "Country", "Digital"
                        { title:"Local", link:"华语"},{ title:"Hits", link:"流行"}]}
            />
        </HotRecommendWrapper>
    )
})
