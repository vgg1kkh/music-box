import { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";


import changeCurrent
import { CategoryWrapper } from "./style";

export default memo(function SongsCategory() {
  
  
  // redux
  const { category } = useSelector(state => ({
    category: state.getIn(["songList", "category"])
  }), shallowEqual);
  const dispatch = useDispatch();

  function selectCategory(name) {

    // update the store the info of currentCategory,
    // the filed currentCategory is a String, default is "All"
    // we past the new name here to reducer
    dispatch(changeCurrentCategoryAction(name));
    // dispatch(getSongList(0));
  }

  
    return (
    <CategoryWrapper>
      <div className="all">
        <span className="link" 
        // onClick={(e) => selectCategory("全部")}
        >
          全部风格
        </span>
      </div>
      <div className="category">
        {
          category.map((item, index) => {
            return (
              <dl key={item.name} className={"item" + index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.subs.map(sItem => {
                      return (
                        <div className="item" key={sItem.name}>
                          <span className="link" onClick={e => selectCategory(sItem.name)}>{sItem.name}</span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </CategoryWrapper>
  );
});
