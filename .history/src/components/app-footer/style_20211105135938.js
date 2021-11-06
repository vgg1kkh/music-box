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
        .left-item::last-of-type .divider {
            display: none;
        }
      }
    }
    .right {
      flex: 4;
    }
  }
`;

export default AppFooterWrapper;
