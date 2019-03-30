import React, { Component } from "react";

import { HomeContainer } from "./styles";

import { Container } from "react-bootstrap";
import Header from "../../components/Header";

import PanelLayoutImage from "../../assets/panel-layout.png";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <Container className="home-container">
          <div className="main-card">
            <p>
              An open-source project and your friendly application!
              <br />
              <br />
              Stay calm, we'll take care of you :D
            </p>

            <img src={PanelLayoutImage} alt="panel-layout" />
          </div>
        </Container>
      </HomeContainer>
    );
  }
}
