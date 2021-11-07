import styled from "styled-components";

export const ThemeHeaderRmcWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 37px;
  padding-right: 5px;
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
    .title {
        font-size: 16px;
        margin-right: 10px;
    }
    .nav-list {
        display: flex;
        align-items: center;
    &:last-of-type .divider    
        .divider{
            margin: 0 5px;
        }
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    padding-right: 10px;
    .icon-right {
        width: 20px;
        height: 20px;
        margin: 0px 0px 2px 5px;
        background: url(${require("@/assets/img/sprite_02.png").default}) 0 -234px no-repeat;
    }
    
  }
`;
