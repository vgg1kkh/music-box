import { memo } from 'react'
import { getImageSize } from '../../utils/getImageSize'

import { SongCoverWrapper } from './style'
export default memo(function SongCover(props) {

    const { info } = props
    console.log(info)
    return (
        <SongCoverWrapper>
            <img src={getImageSize(info.picUrl,140,140)} alt=""></img>
            <p>PPP</p>
        </SongCoverWrapper>
    )
})
