import { memo ,useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import { getBannersAction } from './store/actionCreators'

import { Carousel } from 'antd';

import { RecommendWrapper } from './style'

export default memo(function Recommend() {

    //redux hooks
    const dispatch = useDispatch()
    const {banners} = useSelector(state=>({
        banners: state.recommend.banners
    }),shallowEqual)

    useEffect(() => {
        // getBanners().then(res=>console.log(res))
        dispatch(getBannersAction())
        
    }, [dispatch])
    return (
        <RecommendWrapper>
            {
                 <Carousel afterChange={onChange}>
                 <div>
                   <h3>1</h3>
                 </div>
                 <div>
                   <h3>2</h3>
                 </div>
                 <div>
                   <h3>3</h3>
                 </div>
                 <div>
                   <h3>4</h3>
                 </div>
               </Carousel>
            }
            {console.log("@ recommend page",banners)}
        </RecommendWrapper>
    )
})
