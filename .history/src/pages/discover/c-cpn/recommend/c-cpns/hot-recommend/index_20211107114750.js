import { memo, useEff } from "react";

import ThemeHeaderRcm from "../../../../../../components/theme-head-rcm";

import { HotRecommendWrapper } from "./style";
export default memo(function HotRecommend(props) {


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
