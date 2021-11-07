import { memo } from 'react'

import { ThemeHeaderRmcWrapper } from './style'  

export default memo(function ThemeHeaderRcm() {
    return (
        <ThemeHeaderRmcWrapper>
            <div className='header-left'>
                <div className='title'>title</div>
                <div className='nav-list'>nav</div>
            </div>
            <div className='header-right'>Right</div>
        </ThemeHeaderRmcWrapper>
    )
})
