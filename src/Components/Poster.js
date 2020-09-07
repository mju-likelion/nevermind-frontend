import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Poster = ({ id, imageUrl, appname }) =>
  (Poster.propTypes = {
    id: PropTypes.number.isRequired,
    imageUrl: PropTypes.string,
    appname: PropTypes.string.isRequired,
  });
