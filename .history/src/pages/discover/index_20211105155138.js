import React, { memo } from 'react'

import { discoverMenu } from '@/common/local-data'
import DiscoverWrapper from './style'
import { NavLink } from 'react-router-dom'

export default memo(function Discover() {

    const mapDiscoverMenuToSubNav = ()=>{
        
    }
    return (
        <DiscoverWrapper>
            <ul className="sub-nav w980">
                {
                    discoverMenu.map((item)=>(
                        <li key={item.title} className="sub-nav-item">
                            <NavLink to={item.link}>{item.title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </DiscoverWrapper>
    )
})
