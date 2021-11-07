import styled from "styled-components";
export const SongCoverWrapper = styled.div`
  width: 140px;
  height: 185px;
  
  background-color: pink;
  .item {
    margin: 2px 10px;
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
