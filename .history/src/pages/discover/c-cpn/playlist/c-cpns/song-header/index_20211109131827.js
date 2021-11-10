import React, { memo,useState } from "react";
import { useSelector,useDispatch,shallowEqual } from "react-redux";
import {IoIosArrowDown} from "react-icons/io"
import SongsCategory from "../songs-category";
import { HeaderWrapper,HeaderLeft,HeaderRight } from "./style";

export default memo(function SongsHeader() {

   // hooks
   const [showCategory, setShowCategory] = useState(false);

     // redux
  const { currentCategory } = useSelector(state => ({
    currentCategory: state.getIn(["songList", "currentCategory"])
  }), shallowEqual);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">New Hits</span>
        <button
          className="select"
          onClick={(e) => setShowCategory(!showCategory)}
        >
          <span>Select Category</span>
          <IoIosArrowDown style={}/>
          {/* <i className="sprite_icon2"></i> */}
        </button>
        {showCategory ? <SongsCategory /> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">Hits</button>
      </HeaderRight>
    </HeaderWrapper>
  );
});
