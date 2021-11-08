import { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopListInfoAction } from "./store/actionCreators";
import ToplistItem from "./c-cpns/toplist-item";
import Top
import { TopListWrapper, TopLeft, TopRight } from "./style";

export default memo(function List(props) {
  const { history } = props;
  //redux hooks
  const dispatch = useDispatch();
  const { toplistInfo } = useSelector(
    (state) => ({
      toplistInfo: state.getIn(["toplist", "toplistInfo"]),
    }),
    shallowEqual
  );

  // other hook
  useEffect(() => {
    // Get TopList list
    dispatch(getTopListInfoAction());
  }, [dispatch]);
  return (
    <TopListWrapper className="wrap-bg2">
      <div className="content w980">
        <TopLeft>
          <div className="top-list-container">
            <ToplistItem toplistInfo={toplistInfo} history={history} />
            {console.log(toplistInfo)}
          </div>
        </TopLeft>
        <TopRight>
          <ToplistTitle />
          <ToplistMain />
        </TopRight>
      </div>
    </TopListWrapper>
  );
});
