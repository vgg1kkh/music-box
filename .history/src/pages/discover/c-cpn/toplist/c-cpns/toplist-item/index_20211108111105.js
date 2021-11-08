import { memo } from 'react'

import { TopListItemWrapper } from './style'

export default memo(function TopListItem(props) {

    const { toplistInfo } = props;

    return (
        <TopListItemWrapper>
           {toplistInfo.map()
        </TopListItemWrapper>
    )
})
