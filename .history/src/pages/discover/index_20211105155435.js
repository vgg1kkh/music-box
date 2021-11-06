import React, { memo } from 'react'

import { discoverMenu } from '@/common/local-data'
import DiscoverWrapper from './style'
import { NavLink } from 'react-router-dom'

export default memo(function Discover() {

    const mapDiscoverMenuToSubNav = ()=>{
        return discoverMenu.map((item)=>(
            <li key={item.title} className="sub-nav-item">
                <NavLink to={item.link}>{item.title}</NavLink>
            </li>
        ))
    }
    return (
        <DiscoverWrapper className="w980">
            <ul className="sub-nav">
                {mapDiscoverMenuToSubNav()}
            </ul>
            <div className="content">Content</div>
        </DiscoverWrapper>
    )
})
