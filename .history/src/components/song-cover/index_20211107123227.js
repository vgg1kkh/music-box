import { memo } from 'react'

import { SongCoverWrapper } from './style'
export default memo(function SongCover(props) {

    const { info } = props
    console.log(info)
    return (
        <SongCoverWrapper>
            <img></img>
            <p></p>
        </SongCoverWrapper>
    )
})
