import { memo, useEffect } from "react";
import {useDispatch, useSelector, shallowEqual} from "react-redux"

import { getHotRecommends } from "../../../../../../services/recommend";

import ThemeHeaderRcm from "@/components/theme-head-rcm";

import { HotRecommendWrapper } from "./style";
import { getHotRecommdsAction } from "../../store/actionCreators";
export default memo(function HotRecommend(props) {
  

  //react-redux hooks
  const dispatch = useDispatch()
  const {hotRecommends} = useSelector(state=>({
      hotRecommends:state.getIn(["recommend","hotRecommends"])
  }),shallowEqual)


  //other hooks
  useEffect(() => {
    //   getHotRecommends().then(res=>console.log(res))
    dispatch(getHotRecommdsAction())  
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <ThemeHeaderRcm
        icon={true}
        title="Recommend"
        history={props.history}
        navItems={[
          { title: "Local", link: "华语" },
          { title: "Hits", link: "流行" },
          { title: "Rock", link: "摇滚" },
          { title: "Country", link: "民谣" },
          { title: "Digital", link: "电子" },
        ]}
      />
    
    </HotRecommendWrapper>
  );
});
