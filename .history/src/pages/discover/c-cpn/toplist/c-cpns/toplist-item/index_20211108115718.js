import { Fragment, memo } from "react";
import { shallowEqual,useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

import { changeCurrentIndexAction,changeCurrentToplistIdAction } from "../../store/actionCreators";
import { TopListItemWrapper } from "./style";

export default memo(function TopListItem(props) {
  const { toplistInfo } = props;

  //redux-hooks
  const dispatch = useDispatch()
  const {currentIndex} = useSelector(state=>({
    currentIndex: state.getIn(["toplist","currentIndex"])
  }),shallowEqual)

  // other function
  const clickItem = (e, index, id) => {
    e.preventDefault();
    // dispatch
    dispatch(changeCurrentToplistIdAction(id))
    dispatch(changeCurrentIndexAction(index))
    // 修改URL
    props.history.push(`/discover/ranking?id=${id}`)
  };

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
             onClick={(e) => clickItem(e, index, item.id)}
             to={{pathname: `/discover/songs`, search: `?id=${item.id}`}}
>
<div className="image">
                <img src={getSizeImage(item.coverImgUrl, 44)} alt="" />
              </div>
              <div className="info-right">
                <div className="info-title">{item.name}</div>
                <div className="info-update">{item.updateFrequency}</div>
              </div>

            </NavLink>
          </Fragment>
        );
      })}
    </TopListItemWrapper>
  );
});
