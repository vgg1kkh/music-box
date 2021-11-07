import { memo, useEffect } from "react";
import {useDispatch, useSelector, shallowEqual} from "react-redux"
import { Carousel } from "antd";

import ThemeHeaderRcm from "@/components/theme-head-rcm";

import { NewAlbumWrapper } from "./style";
import { getNewAlbumAction } from "../../store/actionCreators";
export default memo(function HotRecommend(props) {

  //redux hooks
  const dispatch = useDispatch()
  const newAlbums = useSelector((state)=>({
      newAlbums: state.getIn(["recommend","newAlbums"])
  }),shallowEqual)  

  //other hooks
  useEffect(()=>{
    dispatch(getNewAlbumAction())
  },[dispatch])

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRcm icon={true} title="New Album" history={props.history} />
      <div className="content">
        <div className="inner">
          <button className="btn-left text-indent sprite_02">Left</button>
          <button className="btn-right text-indent sprite_02">Right</button>
          <Carousel dots
          autoplay={true}>
            <div className="carousel-item">
                {console.log(newAlbums)}
                {
                newAlbums.slice(0,5).map(item=>(
                    <div>
                        <img>
                        </img>
                    </div>
                ))
                }
            </div>
            <div className="carousel-item">2</div>
          </Carousel>
        </div>
      </div>
    </NewAlbumWrapper>
  );
});
