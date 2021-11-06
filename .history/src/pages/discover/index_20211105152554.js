import React, { memo } from 'react'

import { dicoverMenu } from '@/common/local-data'
import DiscoverWrapper from './style'

export default memo(function Discover() {
    return (
        <DiscoverWrapper>
            <div className="sub-nav w980">
                {
                    discoverMenu.map()
                }
            </div>
        </DiscoverWrapper>
    )
})
