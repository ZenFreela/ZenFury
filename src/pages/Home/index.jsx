import React, { Component } from "react";

import { HomeContainer } from "./styles";

import { Container } from "react-bootstrap";
import Header from "../../components/Header";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <Container className="home-container">
          <h1>Home Page</h1>
        </Container>
      </HomeContainer>
    );
  }
}
