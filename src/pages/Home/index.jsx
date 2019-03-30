import React, { Component } from "react";

import { HomeContainer, TextContainer, ButtonsContainer } from "./styles";

import { Container } from "react-bootstrap";

import Button from "../../components/Button";
import Header from "../../components/Header";

import PanelLayoutImage from "../../assets/panel-layout.png";
import GitHubIcon from "../../assets/github-icon.png";

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <Container className="home-container">
          <div className="main-card">
            <div className="left-side-container">
              <TextContainer>
                An open-source project and your friendly application!
                <br />
                <br />
                Stay calm, we'll take care of you :D
              </TextContainer>

              <ButtonsContainer>
                <Button href="#enjoy" text="Enjoy :D" />
                <Button
                  href="https://github.com/ZenFreela/ZenFury"
                  color="#262626"
                  hoverColor="#161616"
                  text="GitHub"
                />
                <img id="github-icon" src={GitHubIcon} alt="github-icon" />
              </ButtonsContainer>
            </div>

            <div className="right-side-container">
              <img src={PanelLayoutImage} alt="panel-layout" />
            </div>
          </div>
        </Container>
      </HomeContainer>
    );
  }
}
