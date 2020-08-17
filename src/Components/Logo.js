import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RestIcon = styled.img.attrs({
  src: "./logo.png",
})`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: grid;
  margin: 0px auto;
  margin-top: 170px;
`;

const Logo = (width, height) => (
  <>
    <RestIcon width={width} height={height}></RestIcon>
  </>
);

Logo.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Logo;
