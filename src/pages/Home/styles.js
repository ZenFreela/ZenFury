import styled from "styled-components";

const HomeContainer = styled.div`
  background: #fff;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.06);

  .home-container {
    .main-card {
      padding-top: 40px;
      overflow: hidden;
      cursor: default;

      p {
        float: left;
        margin-top: 50px;
        color: #005029;
        width: 42%;
        font-size: 42px;
        font-weight: 700;
        line-height: 45px;
      }

      .buttons {
        position: absolute;
        text-transform: uppercase;
        bottom: 0;

        .enjoy {
        }
      }

      img {
        float: right;
        width: 53%;
      }
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1525px;

      .home-container {
        img {
        }
      }
    }
  }
`;

export { HomeContainer };
