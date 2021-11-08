import { Fragment, memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { TopListItemWrapper } from "./style";

export default memo(function TopListItem(props) {
  const { toplistInfo } = props;

  //redux-hooks
  const {currentIndex} = useSelector(state=>({
    currentIndex: state.getIn(["toplist",])
  }),shallowEqual)

  return (
    <TopListItemWrapper>
      {toplistInfo.map((item, index) => {
        return (
          <Fragment key={index}>
            <h3 style={{ marginTop: index === 4 ? "17px" : "" }}>
              {index === 0 ? "APP HITS" : index === 4 ? "Global Boards" : ""}
            </h3>
            <NavLink
             className={"info " + (index === currentIndex ? 'bg' : '')}
            >

            </NavLink>
          </Fragment>
        );
      })}
    </TopListItemWrapper>
  );
});
