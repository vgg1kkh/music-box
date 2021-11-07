import { memo } from 'react'

import { ThemeHeaderRmcWrapper } from './style'  

export default memo(function ThemeHeaderRcm(props) {

    const {icon,title,navList,right="More"} = props
    return (
        <ThemeHeaderRmcWrapper>
            <div className='header-left'>
                <div className=''
                <div className='title'>{title}</div>
                <div className='nav-list'>{navList}</div>
            </div>
            <div className='header-right'>{right}</div>
        </ThemeHeaderRmcWrapper>
    )
})
