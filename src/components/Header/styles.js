import styled from "styled-components";

import { Navbar } from "react-bootstrap";

const HeaderContainer = styled(Navbar)`
  background: #fff;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  height: 75px;

  .logo {
    width: 65%;

    :hover {
      cursor: pointer;
    }
  }

  button {
    text-transform: capitalize;
    font-weight: bold;
    padding: 5px 25px;
    color: #22c23d;
    border: 1px solid #22c23d;
    border-radius: 3px;
    font-size: 16px;
    transition: all 0.4s ease;
    outline: none;

    :hover {
      color: #22c23d;
      background: #f9f9f9;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1500px;
    }
  }
`;

export { HeaderContainer };
