import styled from "styled-components";
export const SongCoverWrapper = styled.div`
  width: 140px;
  height: 185px;
  margin: 2px 0 10px 0;
  background-color: pink;
  .item {   
    img{
        
    }
    .cover-mask {
        
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
