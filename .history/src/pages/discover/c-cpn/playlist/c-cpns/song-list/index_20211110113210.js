import React, { memo ,useState} from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Skeleton } from 'antd';
import { ReactPaginate } from 'react-paginate';
import SongCover from '@/components/song-cover'
import { PER_PAGE_NUMBER } from '../../store/constants';
import { BodyWrapper } from './style'
import { getSongListAction } from '../../store/actionCreators';

export default memo(function SongsList() {

    // hooks
  const [pageNumber, setPageNumber] = useState(0);

    // redux
    const { categorySongs } = useSelector(state => ({
        categorySongs: state.getIn(["playList", "categorySongs"])
      }), shallowEqual);
      const songList = (categorySongs &&categorySongs.playlists) || [];
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
    return (
        <BodyWrapper>
            { !songList.length? <Skeleton active /> : <div className="songs-list">
        {
          songList.slice(lastItem,lastItem+itemPerPage).map((item, index) => {
            return (
              // <HYThemeCover info={item} key={item.id} right="30px" />
              
              <SongCover key={item.id} info={item} />
            )
          })
        }
        <ReactPaginate
              previousLabel={"Previous"}
              pageRangeDisplayed ={ 10 }
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={pageChange}
              containerClassName={"paginationBtns"}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />

      </div>}
    
        </BodyWrapper>
    )
})
