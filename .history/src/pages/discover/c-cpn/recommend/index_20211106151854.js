import { memo ,useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import { getBanners } from '@/services/recommend'

import { RecommendWrapper } from './style'

export default memo(function Recommend() {

    useEffect(() => {
        getBanners().then(res=>console.log(res))
        
    }, [])
    return (
        <RecommendWrapper>
            Recommend haha
        </RecommendWrapper>
    )
})
