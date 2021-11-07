import { memo } from 'react'
import { getImageSize } from '../../utils/getImageSize'

import { SongCoverWrapper } from './style'
export default memo(function SongCover(props) {

    const { info } = props
    console.log(info)
    return (
        <SongCoverWrapper>
            <Link>
            </Link>
            
        </SongCoverWrapper>
    )
})
