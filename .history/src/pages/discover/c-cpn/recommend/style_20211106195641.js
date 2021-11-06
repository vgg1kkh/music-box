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
            background-image: url('${props=>props.bg}') center/6000px;
            /* background-color: transparent; */
            cursor: pointer;
            .button-left, .button-right {
                position: absolute;
                width: 37px;
                height: 63px;
                top: 50%;
                transform: translateY(-50%);
                background: url(${require("@/assets/img/banner_sprite.png").default}) 0 -429px;
                background-color: transparent;
                &:hover {
                    background-color: rgba(0,0,0,0.1);
                }
            }
            .button-left {                
                left: -50px;                
            }
            .button-right {   
                right: -300px;
                background-position: 0 -579px;
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