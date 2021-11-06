import styled from "styled-components"

export const RecommendWrapper= styled.div`
    
`

export const RecommendBanner = styled.div`
    width: 100%;
    height: 253px;
    .content{
        display: flex;
        .banner-left{
            position: relative;
            width: 730px;
            height: 253px;
            background-color: transparent;
            cursor: pointer;
            .button-left, .button-right {
                position: absolute;
                width: 37px;
                height: 63px;
                background: url(${require("@/assets/img/banner_sprite.png").default}) 0 -429px;
            }
            .button-left {                
                left: -50px;
                top: 50%;
                transform: translateY(-50%);
                
            }
            .button-right {   
                right: -300px;
                top: 50%;
                transform: translateY(-50%);
                bg

                background-color: #CCC;
            };

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