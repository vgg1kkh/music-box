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

    .icon {
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
    padding-right: 10px;
    background: url(${require(""));
  }
`;
