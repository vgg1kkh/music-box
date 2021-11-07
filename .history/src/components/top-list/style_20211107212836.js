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
           background-color: pink;
           .link{
            width: 100%;
            height: 18px;
           }
           .btns{
               width: 100%;
               height: 22px;
               
           }
       }

   }
   .body{
       height: 320px;
       background-color: pink;
   }
   .footer {
       height: 32px;
       background-color: purple;
   }
`