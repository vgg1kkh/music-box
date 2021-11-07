import { memo } from 'react'

import { ThemeHeaderRmcWrapper } from './style'  

export default memo(function ThemeHeaderRcm(props) {

    const {title,navList,} = props
    return (
        <ThemeHeaderRmcWrapper>
            <div className='header-left'>
                <div className='title'>Title</div>
                <div className='nav-list'>navLink</div>
            </div>
            <div className='header-right'>More</div>
        </ThemeHeaderRmcWrapper>
    )
})
