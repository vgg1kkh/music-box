import { memo ,useEffect} from 'react'
import {useDispatch, useSelector, shallowEqual} from 'react-redux'

import { getBannersAction } from './store/actionCreators'

import { Carousel } from 'antd';

import { RecommendWrapper,RecommendLeft,RecommendRight,RecommendBanner} from './style'

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

    //local handles 
    const onChange = a => console.log(a);
    return (
        <RecommendWrapper>
          <RecommendBanner>
              <div className="content w980'>
                  <div className='banner-left'>left</div>
                  <div className=""
              </div>
          </RecommendBanner>
          <div className='content'>
          <RecommendLeft>
              Left
          </RecommendLeft>
          <RecommendRight>
              right
          </RecommendRight>
          </div>
          
            {/* {
               
                 <Carousel 
                 dots
                 afterChange={onChange}>
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
            } */}
            {console.log("@ recommend page",banners)}
        </RecommendWrapper>
    )
})
