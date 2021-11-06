import { memo } from 'react'
import export const footerLinks = [
    {
      title: '服务条款',
      link: 'https://st.music.163.com/official-terms/service',
    },
    {
      title: '隐私政策',
      link: 'https://st.music.163.com/official-terms/privacy',
    },
    {
      title: '儿童隐私政策',
      link: 'https://st.music.163.com/official-terms/children',
    },
    {
      title: '版权投诉指引',
      link: 'https://music.163.com/st/staticdeal/complaints.html',
    },
    {
      title: '意见反馈',
      link: '#',
    },
  ]

import AppFooterWrapper from './style'

export default memo(function index() {
    return (
        <AppFooterWrapper>
            <div className="content w980">
                <div className="left">
                    <ul>
                        {}
                    </ul>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                </div>
                <div className="right">

                </div>
            </div>
        </AppFooterWrapper>
            
        
    )
})