import styled from "styled-components"

export const TopListWrapper = styled.div`
   width: 230px;
   height: 473px;

   .header{
       height: 120px;
       padding: 20px 0 0 21px;
       display: flex;
       .image-wrapper{
           width: 80px;
           height: 80px;
           background-image: url(${props=>props.bgUrl});

       }
       .titles{
           width: 116px;
           height: 50px;
           margin: 6px 0 0 10px;
           .link{
            width: 100%;
            height: 18px;
           }
           .btns{
               display: flex;
               width: 100%;
               height: 23px;
               margin-top: 5px;
               .play, .fav {
                   width: 23px;
                   height: 23px;
                   /* background-color: pink; */
                   margin-right: 5px;
               }
               .play {
                   background-position: -266px -204px;
               }
               .fav {
                background-position: -298px -204px;
               }
           }
       }

   }
   .body{
       height: 320px;
       background-color: pink;
       .list-item{
           height: 32px;
           padding-left: 20p;
       }
   }
   .footer {
       height: 32px;
       background-color: purple;
   }
`