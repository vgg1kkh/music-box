import { Fragment, memo } from "react";
import {}

import { TopListItemWrapper } from "./style";

export default memo(function TopListItem(props) {
  const { toplistInfo } = props;

  return (
    <TopListItemWrapper>
      {toplistInfo.map((item, index) => {
        return (
          <Fragment key={index}>
            <h3 style={{ marginTop: index === 4 ? "17px" : "" }}>
              {index === 0 ? "APP HITS" : index === 4 ? "Global Boards" : ""}
            </h3>
            <NavLink>

            </NavLink>
          </Fragment>
        );
      })}
    </TopListItemWrapper>
  );
});
