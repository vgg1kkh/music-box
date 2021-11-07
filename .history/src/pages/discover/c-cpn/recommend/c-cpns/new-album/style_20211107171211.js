import styled from "styled-components"

export const NewAlbumWrapper = styled.div`
   
   .content {
       display: flex;
       align-items: center;
       justify-content: center;
       height: 184px;
       margin: 20px 0 37px 0;
       border: 1px solid #ccc;
       background-color: pink;

       .inner {
           position: relative;
           width: 640px;
           height: 150px;
           background-color: #fff;
           .btn-left,.btn-right{
                position: absolute;
                top: 50%;
                transform: translateX(-50%);              
                width: 17px;
                height: 17px;
                background-color: #ccc;
                background-position: -264px -74px;
           }
           .btn-left {
               left: -10px;
               &:hover{
                   
               }
           }
           .btn-right {
               right: -30px;
               background-position: -300px -74px;
           }
       }
   }
`


