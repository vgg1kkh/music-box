import { memo } from 'react'

import AppFooterWrapper from './style'

export default memo(function index() {
    return (
        <AppFooterWrapper>
            <div className="content w980">
                <div className="content-left">LEFT</div>
                <div className="content-right">LEFT</div>
            </div>
        </AppFooterWrapper>
            
        
    )
})