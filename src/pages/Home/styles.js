import styled from "styled-components";

const HomeContainer = styled.div`
  background: #fff;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.08);

  .home-container {
    .main-card {
      padding-top: 40px;
      overflow: hidden;
      cursor: default;

      .left-side-container {
        float: left;
        width: 42%;
      }

      .right-side-container img {
        float: right;
        width: 53%;
      }
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1525px;
    }
  }
`;

const TextContainer = styled.p`
  margin-top: 45px;
  color: #008a47;
  font-size: 42px;
  font-weight: 700;
  line-height: 45px;
`;

const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 70px;

  #github-icon {
    margin-top: -12px;
    margin-left: -10px;
    width: 55px;
    height: 52px;
  }
`;

export { HomeContainer, TextContainer, ButtonsContainer };
