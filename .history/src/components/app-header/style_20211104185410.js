import styled from "styled-components";

const AppHeaderWrapper = styled.div`
  width: 100%;
  background-color: #242221;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 53px;
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
          color: #fff;
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
          
          a {
            display: block;
            height: 53px;
            line-height: 53px;
            padding 0 10px;
            font-size: 16px;
            color:#999;
          }
          a.active{
              color: #fff;
              background-color: #000;
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
          border-radius: 5px;
        }
      }
      .creator {
        width: 75px;
        height: 32px;
        color: #333;
        font-size: 14px;
        margin: 0 10px;
        text-align: center;
        border: 1px solid #666;
        border-radius: 5px;
      }

      .login{
        position: relative;
        width: 75px;
        height: 32px;
        margin: 0 10px;
        border: 1px solid #666;
        border-radius: 5px;
        &:hover .login-drowdown-box{
            display: block;
        }
        .login-button{
            display: block;
            width: 100%;
            height: 32px;
            font-size: 14px;
            border-radius: 5px;
        }
        .login-drowdown-box{
            position: absolute;
            display: none;
            left: 0;
            top: 120%;
            width: 100px;
            height: 50px;
            border: 2px solid pink;
        }
      }
    }
      
  }
`

export default AppHeaderWrapper;
