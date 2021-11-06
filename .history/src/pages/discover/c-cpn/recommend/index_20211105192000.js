import { memo ,useEffect} from 'react'


import { getBanners } from '@/services/recommend'

import { RecommendWrapper } from './style'

export default memo(function Recommend() {

    useEffect(() => {
        console.log(getBanners()
        return () => {
            
        }
    }, [input])
    return (
        <RecommendWrapper>
            Recommend haha
        </RecommendWrapper>
    )
})
