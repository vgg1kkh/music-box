import { memo, useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getBannersAction } from "./store/actionCreators";
import { getImageSize } from "@/utils/getImageSize";
import { Carousel } from "antd";

import HotRecommend from "./c-cpns/hot-recommend";
import NewAlbum from "./c-cpns/new-album";

import {
  RecommendWrapper,
  RecommendLeft,
  RecommendRight,
  RecommendBanner,
  RecommendContent,
} from "./style";

export default memo(function Recommend() {
  //local hooks
  const [currentBannerUrl, setCurrentBannerUrl] = useState(null);
  const carouselRef = useRef();

  //redux hooks
  const dispatch = useDispatch();
  const { banners } = useSelector(
    (state) => ({
      //   banners: state.recommend.banners,
      banners: state.getIn(["recommend", "banners"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(getBannersAction());
  }, [dispatch]);

  //local handles
  const onChange = useCallback(
    (a) => {
      setCurrentBannerUrl(getImageSize(banners[a].imageUrl, 40, 20));
    },
    [banners]
  );

  const mapBannerImgToCarousel = useCallback(() => {
    return (
      banners &&
      banners.map((item) => (
        <div key={item}>
          <img src={getImageSize(item.imageUrl, 730, 253)} alt="" />
        </div>
      ))
    );
  }, [banners]);
  return (
    <RecommendWrapper>
      <RecommendBanner bg={currentBannerUrl}>
        <div className="content w980">
          <div className="banner-left">
            <button
              className="button-left text-indent"
              onClick={() => carouselRef.current.prev()}
            >
              Button Left
            </button>
            <button
              className="button-right text-indent"
              onClick={() => carouselRef.current.next()}
            >
              Button right
            </button>
            <Carousel
              ref={carouselRef}
              dots
              autoplay={true}
              afterChange={onChange}
            >
              {mapBannerImgToCarousel()}
            </Carousel>
          </div>
          <div className="banner-right text-indent">download image</div>
        </div>
      </RecommendBanner>
      <RecommendContent className="w980">
        <RecommendLeft>
            <HotRecommend />
            <NewAlbum />
            <RecommendRanking />
        </RecommendLeft>
        <RecommendRight>right</RecommendRight>
      </RecommendContent>
    </RecommendWrapper>
  );
});
