import { memo } from 'react'

import { RecommendWrapper } from './style'

export default memo(function Recommend() {

    useEffect(() => {
        
        return () => {
            cleanup
        }
    }, [input])
    return (
        <div>
            Recommend haha
        </div>
    )
})
