import styled from "styled-components";

export const ThemeHeaderRmcWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
  padding-right: 5px;
  background-color: pink;
  border-bottom: 2px solid #C20C0C;
  .header-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    .icon {
        width: 20px;
        height: 20px;
        background: ${props=>{
        const bgUrl = `url(${require('@/assets/img/sprite_table.png'))) -18px -126px no-repeat`
props.icon? :null}};
    }
  }
  .header-right {
    padding-right: 10px;
  }
`;
