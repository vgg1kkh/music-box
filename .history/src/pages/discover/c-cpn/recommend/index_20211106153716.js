import { memo ,useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import { getBannersAction } from './store/actionCreators'

import { RecommendWrapper } from './style'

export default memo(function Recommend() {

    //redux hooks
    const dispatch = useDispatch()
    const {banners} = useSelector(state=>({
        banners: state.banners
    }),shallowEqual)

    useEffect(() => {
        // getBanners().then(res=>console.log(res))
        dispatch(getBannersAction)
        
    }, [dispatch])
    return (
        <RecommendWrapper>
            Recommend haha
            {console.log("@ recommend page"banners)}
        </RecommendWrapper>
    )
})
