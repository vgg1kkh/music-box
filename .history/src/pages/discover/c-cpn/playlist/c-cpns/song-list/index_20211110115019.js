import React, { memo, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Skeleton } from "antd";
import { ReactPaginate } from "react-paginate";
import SongCover from "@/components/song-cover";

import { BodyWrapper } from "./style";

export default memo(function SongsList() {
  // hooks
  const [pageNumber, setPageNumber] = useState(0);

  // redux
  const { categorySongs } = useSelector(
    (state) => ({
      categorySongs: state.getIn(["playList", "categorySongs"]),
    }),
    shallowEqual
  );
  const songList = (categorySongs && categorySongs.playlists) || [];
  const total = (categorySongs && categorySongs.total) || 0;
  const dispatch = useDispatch();

  //   function onPageChange(page, pageSize) {
  //     window.scroll(0, 0);
  //     setCurrentPage(page);
  //     dispatch(getSongListAction(page));
  //   }
  // other handle
  const itemPerPage = 10;
  const lastItem = pageNumber * itemPerPage;
  const pageCount = songList && Math.ceil(songList.length / itemPerPage);
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <BodyWrapper>
      {!songList.length ? (
        <Skeleton active />
      ) : (
        <div className="songs-list">
          {songList &&
            songList
              .slice(lastItem, lastItem + itemPerPage)
              .map((item, index) => {
                return (
                  // <HYThemeCover info={item} key={item.id} right="30px" />

                  <SongCover key={item.id} info={item} />
                );
              })}
        </div>
      )}
    </BodyWrapper>
  );
});
