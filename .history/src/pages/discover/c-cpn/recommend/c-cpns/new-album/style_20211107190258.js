import styled from "styled-components"

export const NewAlbumWrapper = styled.div`
   
   .content {
       display: flex;
       align-items: center;
       justify-content: center;
       height: 184px;
       margin: 20px 0 37px 0;
       border: 1px solid #ccc;
       background-color: ;

       .inner {
           position: relative;
           width: 640px;
           height: 150px;
           background-color: #fff;
           .carousel-list{
               display: flex !important;
               justify-content: space-evenly;
               width: 100px;
               height: 150px;
               .carousel-item {
               }
               p{
                width: 100px;
               }
               .song-title{
                   margin-top: 10px;
               }
           }






           // The buttons for the carousel
           .btn-left,.btn-right{
                position: absolute;
                top: 50%;
                transform: translateX(-50%);              
                width: 17px;
                height: 17px;
                background-color: #ccc;
                background-position: -261px -74px;
           }
           .btn-left {
               left: -10px;
               &:hover{
                background-position: -281px -74px
               }
           }
           .btn-right {
               right: -30px;
               background-position: -300px -74px;
               &:hover{
                background-position: -320px -74px
               }
           }
       }
   }
`


