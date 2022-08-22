import React from "react";
import PropTypes from "prop-types";
import "./animatedButton.scss";
import { propTypes } from "react-bootstrap/esm/Image";
const AnimatedButton = ({ title }) => {
  return (
    <a href="#" class="animated-button1">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {title}
    </a>
  );
};

AnimatedButton.propTypes = {
  title:PropTypes.string,
};

export default AnimatedButton;
