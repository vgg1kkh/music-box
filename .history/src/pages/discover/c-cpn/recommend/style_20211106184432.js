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
            position: relative;
            width: 730px;
            height: 253px;
            .button-left,.button-right {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: 20px;
                height: ;
            }

            img{
                width: 100%;
                height: 253px;
            }
        }
        .banner-right {
            width: 250px;
            height: 253px;
            background: url(${require("@/assets/img/download.png").default}) 0 0 /cover;
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