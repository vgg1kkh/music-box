import { memo ,useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import { getBanners } from '@/services/recommend'

import { RecommendWrapper } from './style'

export default memo(function Recommend() {

    //redux hooks
    const dispatch = useDispatch()
    const {banners} = state=>({
        banners: state.banners
    })

    useEffect(() => {
        getBanners().then(res=>console.log(res))
        
    }, [])
    return (
        <RecommendWrapper>
            Recommend haha
            {clg}
        </RecommendWrapper>
    )
})
