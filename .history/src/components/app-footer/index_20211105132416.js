import { memo } from 'react'

import AppFooterWrapper from './style'

export default memo(function index() {
    return (
        <AppFooterWrapper>
            <div className="content w980">
                <div className="left">LEFT</div>
                <div className="content-right">right</div>
            </div>
        </AppFooterWrapper>
            
        
    )
})