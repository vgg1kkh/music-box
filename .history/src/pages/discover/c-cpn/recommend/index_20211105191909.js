import { memo ,useEffect(() => {
    effect
    return () => {
        cleanup
    }
}, [input])} from 'react'


import { getBanners } from '@/services/recommend'

import { RecommendWrapper } from './style'

export default memo(function Recommend() {

    useEffect(() => {
        
        return () => {
            cleanup
        }
    }, [input])
    return (
        <RecommendWrapper>
            Recommend haha
        </RecommendWrapper>
    )
})
