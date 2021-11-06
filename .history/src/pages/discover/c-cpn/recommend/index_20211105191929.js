import { memo ,useEffect} from 'react'


import { getBanners } from '@/services/recommend'

import { RecommendWrapper } from './style'

export default memo(function Recommend() {

    useEffect(() => {
        
        return () => {
            getBanners()
        }
    }, [input])
    return (
        <RecommendWrapper>
            Recommend haha
        </RecommendWrapper>
    )
})
