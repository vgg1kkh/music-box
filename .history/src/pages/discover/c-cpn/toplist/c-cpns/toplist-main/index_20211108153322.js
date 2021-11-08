import { memo, useEffect } from "react";
import { useDispatch, shallowEqual,useSelector } from "react-redux";
import { getToplistItemAction } from "../../store/actionCreators";
import The
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


  // other handle
  const rightSlot = (
    <span>
      Play：<em style={{ color: '#c20c0c' }}>{playCount}</em>Times
    </span>
  )

  return <ToplistMainWrapper>
      <ThemeHeaderRcm title="歌曲列表" showIcon={false} right={rightSlot} />
      {/* <ThemeHeaderRcm title="歌曲列表" showIcon={false} right={rightSlot} />
      <div className="toplist-main">
        <div className="main-header">
          <div className="sprite_table header-item"></div>
          <div className="sprite_table header-item header-title">标题</div>
          <div className="sprite_table header-item header-time">时长</div>
          <div className="sprite_table header-item header-singer">歌手</div>
        </div>
        <div className="main-list">
          {
            currentToplist && currentToplist.slice(0, 100).map((item,index) => {
              return   <SongItem 
              key={item.id}
              currentRanking={index+1} 
              className="song_item"
              coverPic={index < 3?item.al.picUrl:''}
              duration={formatMinuteSecond(item.dt)}
              songName={item.name}
              singer={item.ar[0].name}
              songId={item.id}
              />
            })
          }
        </div>
      </div> */}
  </ToplistMainWrapper>;
});