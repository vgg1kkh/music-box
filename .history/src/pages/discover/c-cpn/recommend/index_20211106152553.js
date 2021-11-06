import { memo ,useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import {get}

import { RecommendWrapper } from './style'

export default memo(function Recommend() {

    //redux hooks
    const dispatch = useDispatch()
    const {banners} = useSelector(state=>({
        banners: state.banners
    }),shallowEqual)

    useEffect(() => {
        // getBanners().then(res=>console.log(res))
        dispatch()
        
    }, [])
    return (
        <RecommendWrapper>
            Recommend haha
            {console.log(banners)}
        </RecommendWrapper>
    )
})
