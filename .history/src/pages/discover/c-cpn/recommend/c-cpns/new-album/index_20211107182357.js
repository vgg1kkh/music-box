import { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import ThemeHeaderRcm from "@/components/theme-head-rcm";

import { NewAlbumWrapper } from "./style";
import { getNewAlbumAction } from "../../store/actionCreators";
import { getImageSize } from "../../../../../../utils/formatUtils";
export default memo(function HotRecommend(props) {

  // local hooks
    const carouselRef = useRef()
  //redux hooks
  const dispatch = useDispatch();
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  //other hooks
  useEffect(() => {
    dispatch(getNewAlbumAction());
  }, [dispatch]);

  //mapItemsToCarousel
  const mapItemsToCarousel = (list) => {
    return list.map((item) => (
      <div key={item.id} className="carousel-item">
        <img src={getImageSize(item.picUrl, 100, 100)} alt=""></img>
        <p>{item.name}</p>
        <p>{item.artist.name}</p>
      </div>
    ));
  };

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm icon={true} title="New Album" history={props.history} />
      <div className="content">
        <div className="inner">
          <button className="btn-left text-indent sprite_02">Left</button>
          <button className="btn-right text-indent sprite_02">Right</button>
          <Carousel ref={carouselRef}autoplay={true}>
            <div className="carousel-list">
              {console.log("@", newAlbums)}
              {newAlbums && mapItemsToCarousel(newAlbums.slice(0,5))
               }
            </div>
            <div className="carousel-list">
                {newAlbums && mapItemsToCarousel(newAlbums.slice(5,10))}
            </div>
          </Carousel>
        </div>
      </div>
    </NewAlbumWrapper>
  );
});
