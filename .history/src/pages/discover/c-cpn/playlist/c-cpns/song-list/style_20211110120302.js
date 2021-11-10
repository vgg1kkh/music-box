import styled from  "styled-components"
export const BodyWrapper = styled.div`
.songs-list {
    display: flex;
    flex-wrap: wrap;
    width: 800px;
    margin: 10px auto;
    /* background-color: pink; */
    justify-content: space-between;
    /* margin-right: -30px; */
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
        margin: 0 6px;
        border-radius: 5px;
        border: 1px solid rgb(194,12,12);
        color: rgb(194,12,12);
        cursor: pointer;
        &:hover{
            background-color:rgb(194,12,12);
            color: #d9d9d9;
        }
    }
    .paginationActive a{
        background-color: rgb(194,12,12);
            color: #d9d9d9;
    }
    .paginationDisabled a{
        background-color: #333;
            color: #fff;
    }
}        

}
  }
`