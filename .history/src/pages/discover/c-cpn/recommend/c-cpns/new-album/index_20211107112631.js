import { memo } from 'react'

import ThemeHeaderRcm from'@/components/theme-head-rcm'

import { NewAlbumWrapper } from './style'
export default memo(function HotRecommend(props) {
    return (
        <NewAlbumWrapper>
             <ThemeHeaderRcm
        icon={true}
        title="New Album"
        history={props.history}
        navItems={[
          { title: "Local", link: "华语" },
          { title: "Hits", link: "流行" },
          { title: "Rock", link: "摇滚" },
          { title: "Country", link: "民谣" },
          { title: "Digital", link: "电子" },
        ]}
      />
        </NewAlbumWrapper>
    )
})
