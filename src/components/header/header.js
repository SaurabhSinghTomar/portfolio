import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Image } from "../../assets/images/imageData";
import { Text } from "../../const/text";
import "./header.scss";
const Header = () => {
  const { home, work, about, contactUs, portFolio } = Text;
  return (
    <header className="App-header">
      <Navbar expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Image.logo}
              width="200"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          <input class="checkbox" type="checkbox" name="" id="" />
            <div class="hamburger-lines">
              <span class="line line1"></span>
              <span class="line line2"></span>
              <span class="line line3"></span>
            </div>  
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="nav-wrap row">
              <div className="nav-sub col">{home}</div>
              <div className="nav-sub col"> {work} </div>
              <div className="nav-sub col"> {about} </div>
              <div className="nav-sub col"> {contactUs} </div>
              <div className="nav-sub col"> {portFolio} </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

Header.propTypes = {};

export default Header;
