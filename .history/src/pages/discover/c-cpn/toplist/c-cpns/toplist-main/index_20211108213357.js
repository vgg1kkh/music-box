import { memo, useEffect,useState } from "react";
import { useDispatch, shallowEqual,useSelector } from "react-redux";
import ReactPaginate from "react-paginate"
import { getToplistItemAction } from "../../store/actionCreators";
import ThemeHeaderRcm from "../../../../../../components/theme-head-rcm";
import { formatMinuteSecond } from '@/utils/formatUtils.js'
import SongItem from "../song-item"
import { ToplistMainWrapper } from "./style";

export default memo(function ToplistMain() {

  //local state
  const [pageNumber, setPageNumber] = useState(0)

  //redux-hooks  
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
  const itemPerPage = 10;
  const lastItem = pageNumber * itemPerPage
  const displayItems = currentToplist && currentToplist.slice(lastItem,lastItem+itemPerPage).map((item,index)=>{
    return   <SongItem 
              key={item.id}
              currentRanking={index+1} 
              className="song_item"
              coverPic={item.al.picUrl}
              duration={formatMinuteSecond(item.dt)}
              songName={item.name}
              singer={item.ar[0].name}
              songId={item.id}
              />
  })


  const rightSlot = (
    <span>
      Play：<em style={{ color: '#c20c0c' }}>{playCount}</em>Times
    </span>
  )

  return <ToplistMainWrapper>
      <ThemeHeaderRcm title="歌曲列表" showIcon={false} right={rightSlot} />
      <div className="toplist-main">
        <div className="main-header">
          <div className="sprite_table header-item"></div>
          <div className="sprite_table header-item header-title">Title</div>
          <div className="sprite_table header-item header-time">Duration</div>
          <div className="sprite_table header-item header-singer">Singer</div>
        </div>
        <div className="main-list">
          {
            displayItems
          }
          <ReactPaginate 
            previousLabel={"Previous"}
          />
        </div>
      </div>
  </ToplistMainWrapper>;
});