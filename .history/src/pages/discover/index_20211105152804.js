import React, { memo } from 'react'

import { discoverMenu } from '@/common/local-data'
import DiscoverWrapper from './style'

export default memo(function Discover() {
    return (
        <DiscoverWrapper>
            <ul className="sub-nav w980">
                {
                    discoverMenu.map((item)=>(
                        <li key={item.title}></li>
                    ))
                }
            </ul>
        </DiscoverWrapper>
    )
})
