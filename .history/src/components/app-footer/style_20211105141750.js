import styled from "styled-components";

const AppFooterWrapper = styled.div`
  width: 100%;
  background-color: #ececec;
  border-top: 1px solid #ccc;
  .content {
    display: flex;
    padding: 10px;
    .left {
      flex: 6;
      .left-items {
        display: flex;
        width: 100%;
        height: 30px;
        align-items: center;
        .left-item {
          a {
            color: #333;
          }
          .divider {
            margin: 0 10px;
          }
        }
        .left-item:last-of-type .divider {
            display: none;
        }
      }
    }
    .right {
      display: flex;
      flex: 4;
      a {
          width: 90px;
          height: 90px;
          margin-right: 10px;
          background: url(${require("@/assets/img/sprite_footer_02.png").default}) 0 0 no-repeat;
      }
      a:first-child {
          background-position: 0 0;
      }
      a:nth-child(2) {
          background-position: -117px -0px;
      }
      a:nth-child(3) {
          background-position: -117px -0px;
      }
    }
  }
`;

export default AppFooterWrapper;
