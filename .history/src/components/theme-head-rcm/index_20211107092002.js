import { memo } from 'react'

import { ThemeHeaderRmcWrapper } from './style'  

export default memo(function ThemeHeaderRcm() {
    return (
        <ThemeHeaderRmcWrapper>
            <div className='header-left'>
                
            </div>
            <div className='header-right'>Right</div>
        </ThemeHeaderRmcWrapper>
    )
})
