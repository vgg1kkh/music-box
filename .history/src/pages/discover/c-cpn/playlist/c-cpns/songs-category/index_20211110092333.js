import { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";


import {changeCurrentCategoryAction ,getSongListAction} from "../../store/actionCreators"
import { CategoryWrapper } from "./style";

export default memo(function SongsCategory() {
  
  
  // redux
  const { category } = useSelector(state => ({
    category: state.getIn(["playList", "category"])
  }), shallowEqual);
  const dispatch = useDispatch();

  function selectCategory(name) {

    // update the store the info of currentCategory,
    // the filed currentCategory is a String, default is "All"
    // we past the new name here to reducer
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getSongListAction(0));
    console.log("selectCategory()is exec.");
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
          category && category.map((item, index) => {
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
                          <span className="link" 
                          onClick={e => {
                              console.log("item is clicked.",sItem.name);
                              selectCategory(sItem.name)
                        }}>{sItem.name}</span>
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
