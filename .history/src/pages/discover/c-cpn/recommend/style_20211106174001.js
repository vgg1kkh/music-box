import styled from "styled-components"

export const RecommendWrapper= styled.div`
    
`

export const RecommendBanner = styled.div`
    width: 100%;
    background-color: pink;
    height: 253px;
    .content{
        display: flex;
        .banner-left{
            width: 730px;
            height: 253px;
        }
        .banner-right {
            width: 250px;
            height: 253px;
            background: url(${require})
        }
    }
`

export const RecommendLeft = styled.div`
width: 730px;
border: 1px solid #ccc;
border-top: none;
`

export const RecommendRight = styled.div`
width: 250px;
border: 1px solid #ccc;
border-top: none;
border-left: none;
`