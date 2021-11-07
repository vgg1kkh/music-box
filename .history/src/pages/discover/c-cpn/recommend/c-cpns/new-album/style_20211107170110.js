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
                left: 0;
                width: 17px;
                height: 17px;
                background-color: #ccc;
           }
           .btn-left {
               left
           }
       }
   }
`


