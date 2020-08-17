import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RestIcon = styled.img.attrs({
  src: "./logo.png",
})`
  width: 220px;
  height: 195px;
  display: block;
  margin: 0px auto;
  margin-top: 170px;
`;

const Logo = () => (
  <>
    <RestIcon></RestIcon>
  </>
);
export default Logo;
