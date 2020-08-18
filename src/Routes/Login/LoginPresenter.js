import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LoginPresenter = () => (
  <Container className="my-4">
    <Helmet>
      <title>Login | Nevermind</title>
    </Helmet>
  </Container>
);

export default LoginPresenter;
