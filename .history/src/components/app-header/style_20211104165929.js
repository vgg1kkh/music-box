import styled from "styled-components";

const AppHeaderWrapper = styled.div`
  width: 100%;
  background-color: #242221;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 53px;
    background-color: pink;
    .header-left {
      display: flex;
      align-items: center;
      height: 53px;
      .header-left-link {
        display: flex;
        align-items: center;
        .header-left-logo {
          width: 40px;
          height: 40px;
          margin: 0 10px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
        .header-left-title {
          margin-right: 10px;
        }
      }

      .header-left-nav {
        display: flex;
        align-items: center;
        padding-right: 20px;
        .header-left-nav-item {
          padding: 0 20px;
          height: 100%;
          background-color: #ccc;
          a {
            display: block;
            height: 53px;
            line-height: 53px;
            font-size: 16px;
          }
        }
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      .search-wrapper {
        position: relative;
        margin-right: 10px;
        i {
          position: absolute;
          top: 50%;
          left: 5px;
          transform: translateY(-40%);
        }
        .search-wrapper-content {
          width: 221px;
          height: 32px;
          text-indent: 2em;
          font-size: 14px;
          /* border-radius: 16px; */
        }
      }
      .creator {
        width: 75px;
        height: 32px;
        line-height: 32px;
        color: #ccc;
        font-size: 14px;
        margin: 0 10px;
        text-align: center;
        border: 1px solid #666;
        /* border-radius: 16px; */
      }
    }
      
  }
`

export default AppHeaderWrapper;
