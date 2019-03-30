import styled from "styled-components";

const ButtonContainer = styled.div`
  margin-right: 30px;

  a {
    background: ${props => (props.color ? props.color : "#43ab5f")};
    padding: 14px 31px;
    color: #fff;
    border-radius: 7px;
    transition: all 0.3s ease;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 21px;

    :hover {
      text-decoration: none;
      background: ${props => (props.hoverColor ? props.hoverColor : "#3d9c56")};
    }
  }
`;

export { ButtonContainer };
