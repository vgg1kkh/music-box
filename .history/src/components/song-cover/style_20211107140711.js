import styled from "styled-components";
export const SongCoverWrapper = styled.div`
  width: 140px;
  height: 185px;
  margin: 2px 0 10px 0;
  background-color: pink;
  .item {   
    .image-wrapper{
        position: relative;
        .cover-mask {
        position: absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background-position: 0 0;
        .bottom-bar{
            position: absolute;
            display: flex;
            justify-content: space-between;
            align-items: center;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 27px;
            padding:0 5px;
            background-position: 0 -534px;
            .left{
                display: flex;
                align-items:center;
                i{  
                    display: block;
                    width: 14px;
                    height: 11px;
                    margin-right: 5px;
                    background-position: 0 -22px;
                    
                }
            }
            .right{
                display: block;
                width: 17px;
                height: 17px;
                mar
                background-position: 0 0;
            }
        }
    }
    }
    
    .title {
      padding: 5px;
      height: 45px;
      text-indent: 1em;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
`;
