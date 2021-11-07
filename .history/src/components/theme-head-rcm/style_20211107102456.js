import styled from "styled-components";

export const ThemeHeaderRmcWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
  padding-right: 5px;
  background-color: pink;
  border-bottom: 2px solid #c20c0c;
  .header-left {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon-left {
      width: 20px;
      height: 20px;
      background: ${(props) => {
        const bgUrl = `url(${
          require("@/assets/img/sprite_table.png").default
        }) -18px -126px no-repeat`;
        return props.icon ? bgUrl : null;
      }};
      margin-right: 10px;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    padding-right: 10px;
    .icon-right {
        width: 2px;
        height: 10px;
        background-color: purple;
        background: url(${require("@/assets/img/sprite_02.png").default}) 0 -234px no-repeat;
    }
    
  }
`;
