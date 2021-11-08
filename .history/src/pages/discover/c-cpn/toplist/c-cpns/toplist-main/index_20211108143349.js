import { memo, useEffect } from "react";
import { useDispatch, shallowEqual } from "react-redux";
import { getToplistItemAction } from "../../store/actionCreators";
import { ToplistMainWrapper } from "./style";

export default memo(function ToplistMain() {
  const dispatch = useDispatch();
  const { playCount, currentToplistId, currentToplist } = useSelector(
    (state) => ({
      playCount: state.getIn([
        "toplist",
        "currentToplistTitleInfo",
        "playCount",
      ]),
      currentToplistId: state.getIn(["toplist", "currentToplistId"]),
      currentToplist: state.getIn(["toplist", "currentToplist"]),
    }),
    shallowEqual
  );

  // other hook
  useEffect(() => {
    dispatch(getToplistItemAction(currentToplistId));
  }, [dispatch, currentToplistId]);
  return <ToplistMainWrapper>Main</ToplistMainWrapper>;
});

  // other handle
  const rightSlot = (
    <span>
      Play：<em style={{ color: '#c20c0c' }}>{playCount}</em>次
    </span>
  )