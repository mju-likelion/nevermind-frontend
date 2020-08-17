import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";
import Sidebar from "Components/Sidebar";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const ItemContainer = styled.div`
  position: absolute;
  left: 35%;
`;

const Button = styled.p`
  text-align: center;
  margin-top: 60px;
`;

const MainPresenter = () => (
  <Container>
    <Helmet>
      <title>Main | Nevermind</title>
    </Helmet>

    <Sidebar></Sidebar>
    <ItemContainer>
      <Logo></Logo>
      <Button>
        <button type="button" className="btn btn-outline-dark btn-lg">
          START
        </button>
      </Button>
    </ItemContainer>
  </Container>
);

export default MainPresenter;
