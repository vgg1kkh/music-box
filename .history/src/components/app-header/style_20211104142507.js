import styled from "styled-components";

const AppHeaderWrapper = styled.div`
    width: 100%;
    background-color: #242221;
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height:53px;
        background-color: pink;
        .header-left{
            display: flex;
            align-items: center;
            height: 53px;
            .header-left-link{

            }
            
            .header-left-nav {
                display: flex;
                align-items: center;
                height: 100%;
                li {
                    padding: 0 10px;
                    height: 100%;
                    background-color: #ccc;
                }
                
            }
            
        }
    }
    

`

export default AppHeaderWrapper