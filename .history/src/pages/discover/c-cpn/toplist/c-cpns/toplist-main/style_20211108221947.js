import styled from "styled-components"

export const ToplistMainWrapper = styled.div`
padding: 10px 40px;

.toplist-main {
  border: 1px solid #d9d9d9;

  .main-header {
    display: flex;
    .header-item {
      width: 74px;
      height: 34px;
      line-height: 18px;
      padding: 8px 10px;
      background-position: 0 0;
      background-repeat: repeat-x;
      background-color: #f2f2f2;
      color: #666;
      
      &:first-child {
        border-right: 1px solid #dadada;
      }
      &.header-title {
        width: 327px;
        border-right: 1px solid #dadada;
      }
      &.header-singer {
        width: 173px;
      }
      &.header-time {
        width: 91px;
        border-right: 1px solid #dadada;
      }
    }
  }

  .main-list {
    .song_item:nth-child(odd) {
      background: #f7f7f7 !important;
    }
    .song_item:nth-child(-n + 3) {
      height: 70px !important;
    }
    .pagination {

        height: 40px;
        width:80%;
        
        margin: 10px auto;

        .paginationBtns{
            display: flex;
            height: 40px;
            align-items: center;
            justify-content: center;
            a{
                padding: 6px;
                margin: 0 8px;
                border-radius: 5px;
                border: 1px solid #2b2eff;
                color: #2b2eff;
                cursor: pointer;
                &:hover{
                    background-color: #2b2eff;
                    color: #d9d9d9;
                }
            }
            .paginationActive a{
                background-color: #2b2eff;
                    color: #d9d9d9;
            }
        }        

    }
  }
}
`