import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./banner.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Text } from "../../const/text";
import AnimatedButton from "../animatedButton/animatedButton";
const Banner = (props) => {
  const [fadeIn, setFadeIn] = useState("");
  const [showText, setShowText] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFadeIn("in");
    }, 500);
  }, []);

  const textArray = ["WEB DEVELOPER", "UI SPECIALIST", "REACT DEVELOPER"];

  useEffect(() => {
    for (let i = 0; i < textArray.length; i++) {}
    var i = 0;
    setInterval(() => {
      if (i == textArray.length-1) {
        i = 0;
        setShowText(textArray[i]);
      } else {
        i+=1;
        setShowText(textArray[i]);
      }
    }, 2000);
  }, []);
  return (
    <div class="banner-wrap">
      <Container>
        <Row>
          <Col className={`fade ${fadeIn}`}>
            <h3>Simple and Elegant</h3>
            <AnimatedButton title={Text.name} />
            <h2 class="rotate">{showText}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam
              erat volutpat.
            </p>
            <a
              href="#work"
              class="btn btn-default smoothScroll wow fadeInUp"
              data-wow-delay="1s"
            >
              Get started
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
