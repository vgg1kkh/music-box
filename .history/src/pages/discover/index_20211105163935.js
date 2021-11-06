import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'


import { discoverMenu } from '@/common/local-data'
import DiscoverWrapper from './style'


export default memo(function Discover() {

    const mapDiscoverMenuToSubNav = ()=>{
        return discoverMenu.map((item)=>(
            <li key={item.title} className="sub-nav-item">
                <NavLink to={item.link}>{item.title}</NavLink>
            </li>
        ))
    }
    return (
        <DiscoverWrapper>
            <ul className="sub-nav w980">
                {mapDiscoverMenuToSubNav()}
            </ul>
            <div className="content w980">
                
            </div>
        </DiscoverWrapper>
    )
})
