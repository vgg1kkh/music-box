import { memo ,useEffect} from 'react'


import { getBanners } from '@/services/recommend'

import { RecommendWrapper } from './style'

export default memo(function Recommend() {

    useEffect(() => {
        
        return () => {
            console.log(getBanners()
        }
    }, [input])
    return (
        <RecommendWrapper>
            Recommend haha
        </RecommendWrapper>
    )
})
