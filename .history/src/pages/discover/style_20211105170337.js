import styled from "styled-components"

const DiscoverWrapper = styled.div`
    .sub-wrapper{
        background-color: #C20C0C;
        width: 100%;
        .sub-nav {
        display: flex;
        align-items: center;
        height: 40px;
        .sub-nav-item{
            padding: 0 10px;
            height: 40px;
            a{
                display: block;
                height: 25px;
                line-height: 25px;
                color: #fff;
                font-size: 14px;
                margin-top: 6px;
                padding: 0 8px;
                background-color: #9B0909;
                border-radius: 30%;
            }
            a.active {
                transform: sc();
            }
        }
        
        
    }
    }
   
`

export default DiscoverWrapper