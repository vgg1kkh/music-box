import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getBannersAction } from "./store/actionCreators";
import { getImageSize } from "@/utils/getImageSize";
import { Carousel } from "antd";

import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  RecommendBanner,
} from "./style";

export default memo(function Recommend() {
  //local hooks
  const carouselRef = useRef();

  //redux hooks
  const dispatch = useDispatch();
  const { banners } = useSelector(
    (state) => ({
      banners: state.recommend.banners,
    }),
    shallowEqual
  );

  useEffect(() => {
    // getBanners().then(res=>console.log(res))
    dispatch(getBannersAction());
  }, [dispatch]);

  //local handles
  const onChange = (a) => {
      
  }console.log(a);

  const mapBannerImgToCarousel = ()=>{
    return banners.map((item) => (
        <div key={item}>
          <img src={getImageSize(item.imageUrl, 730, 253)} alt="" />
        </div>
      ))
  }
  return (
    <RecommendWrapper>
      <RecommendBanner>
        <div className="content w980">
          <div className="banner-left">
            <button
              className="button-left text-indent"
              onClick={()=>carouselRef.current.prev()}
            >
              Button Left
            </button>
            <button
              className="button-right text-indent"
              onClick={()=>carouselRef.current.next()}
            >
              Button right
            </button>
            <Carousel ref={carouselRef} dots afterChange={onChange}>
                {mapBannerImgToCarousel()}
            </Carousel>
          </div>
          <div className="banner-right text-indent">download image</div>
        </div>
      </RecommendBanner>
      <div className="content">
        <RecommendLeft>Left</RecommendLeft>
        <RecommendRight>right</RecommendRight>
      </div>

      {console.log("@ recommend page", banners)}
    </RecommendWrapper>
  );
});
