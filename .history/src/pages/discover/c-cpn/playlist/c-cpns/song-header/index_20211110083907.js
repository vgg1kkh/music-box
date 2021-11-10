import React, { memo,useState } from "react";
import { useSelector,useDispatch,shallowEqual } from "react-redux";
import {IoIosArrowDown} from "react-icons/io"
import {FaSearch} from "react-icons/fa"
import SongsCategory from "../songs-category";
import { HeaderWrapper,HeaderLeft,HeaderRight } from "./style";

export default memo(function SongsHeader() {

   // hooks
   const [showCategory, setShowCategory] = useState(false);

     // redux
  const { currentCategory } = useSelector(state => ({
    currentCategory: state.getIn(["playList", "currentCategory"])
  }), shallowEqual);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button
          className="select"
          onClick={(e) => setShowCategory(!showCategory)}
        >
          <span>{showSelect Category}</span>
          <IoIosArrowDown style={{verticalAlign:"middle"}}/>

        </button>
        {showCategory ? <SongsCategory /> : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">Hits</button>
      </HeaderRight>
    </HeaderWrapper>
  );
});
