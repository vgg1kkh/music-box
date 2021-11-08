import { Fragment, memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { getImageSize } from "../../../../../../utils/formatUtils";

import {
  changeCurrentIndexAction,
  changeCurrentToplistIdAction,
} from "../../store/actionCreators";
import { TopListItemWrapper } from "./style";

export default memo(function TopListItem(props) {
  const { toplistInfo } = props;

  //redux-hooks
  const dispatch = useDispatch();
  const { currentIndex } = useSelector(
    (state) => ({
      currentIndex: state.getIn(["toplist", "currentIndex"]),
    }),
    shallowEqual
  );

  // other function
  const clickItem = (e, index, id) => {
    e.preventDefault();
    // dispatch
    dispatch(changeCurrentToplistIdAction(id));
    dispatch(changeCurrentIndexAction(index));
    // chnage URL
    props.history.push(`/discover/toplist?id=${id}`);
  };

  return (
    <TopListItemWrapper>
      {toplistInfo.map((item, index) => {
        return (
          <Fragment key={index}>
            <h3 style={{ marginTop: index === 4 ? "17px" : "" }}>
              {index === 0 ? "APP HITS" : index === 4 ? "Global Boards" : ""}
            </h3>
            <Link
              className={"info " + (index === currentIndex ? "bg" : "")}
              onClick={(e) => clickItem(e, index, item.id)}
              to=""
            //   to={{ pathname: `/discover/toplist`, search:`?id=${item.id}`}}
            >
              <div className="image">
                <img src={getImageSize(item.coverImgUrl, 44)} alt="" />
              </div>
              <div className="info-right">
                <div className="info-title">{item.name}</div>
                <div className="info-update">{item.updateFrequency}</div>
              </div>
            </Link>
          </Fragment>
        );
      })}
    </TopListItemWrapper>
  );
});
