import { Fragment, memo } from "react";

import { TopListItemWrapper } from "./style";

export default memo(function TopListItem(props) {
  const { toplistInfo } = props;

  return (
    <TopListItemWrapper>
      {toplistInfo.map((item, index) => {
        return (
          <Fragment key={index}>
            <h3 style={{ marginTop: index === 4 ? "17px" : "" }}>
              {index === 0 ? "APP HITS" : index === 4 ? "全球媒体榜" : ""}
            </h3>
          </Fragment>
        );
      })}
    </TopListItemWrapper>
  );
});
