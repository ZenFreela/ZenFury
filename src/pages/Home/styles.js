import styled from "styled-components";

const HomeContainer = styled.div`
  background: #f4f5f7;

  h1 {
    margin: 0;
  }

  .home-container {
    padding-top: 20px;

    h1 {
      padding-bottom: 20px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1525px;
    }
  }
`;

export { HomeContainer };
