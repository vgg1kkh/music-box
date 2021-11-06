import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'


import { discoverMenu } from '@/common/local-data'
import DiscoverWrapper from './style'


export default memo(function Discover(props) {

    const mapDiscoverMenuToSubNav = ()=>{
        return discoverMenu.map((item)=>(
            <li key={item.title} className="sub-nav-item">
                <NavLink to={item.link}>{item.title}</NavLink>
            </li>
        ))
    }
    return (
        <DiscoverWrapper>
            <div className="">
            <ul className="sub-nav w980">
                {mapDiscoverMenuToSubNav()}
            </ul>
            </div>       
            <div className="content w980">
                {renderRoutes(props.route.routes)}
            </div>
        </DiscoverWrapper>
    )
})
