import React from "react";

import { HeaderContainer } from "./styles";

import Logo from "../../assets/logo.png";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";

const Header = () => (
  <HeaderContainer>
    <Container>
      <Navbar.Brand>
        <img className="logo" src={Logo} alt="ZenFreela" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" />
        <Form inline>
          <Button variant="outline-success">Enjoy</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </HeaderContainer>
);

export default Header;
