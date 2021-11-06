import { memo } from 'react'

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
