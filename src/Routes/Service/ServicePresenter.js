import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Sidebar from "Components/Sidebar";
import Helmet from "react-helmet";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const ServicePresenter = () => (
  <Container>
    <Helmet>
      <title>Service | Nevermind</title>
    </Helmet>
    <Sidebar></Sidebar>
  </Container>
);

export default ServicePresenter;
