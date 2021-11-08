import { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import qs from 'query-string'

import { getTopListInfoAction } from "./store/actionCreators";
import ToplistItem from "./c-cpns/toplist-item";
import ToplistMain from "./c-cpns/toplist-main";
import ToplistTitle from "./c-cpns/toplist-title";
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

    //Ranking Header Info
    useEffect(() => {
        // Dispatch to change the Title of the page
        let { id } = qs.parse(props.location.search)
        id = id ? id : currentToplistId
        dispatch(getToplistTitleInfoAction(id))
      }, [currentToplistId, dispatch, props])
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
