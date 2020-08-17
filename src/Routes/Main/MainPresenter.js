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

const Desc = styled.p`
  font-family: "GmarketSansBold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  font-size: 35px;
  margin-top: 50px;
  text-align: center;
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
      <Desc>
        매달 신경쓰였던 '구독정보' <br />
        이제 Never Mind가 대신 알려드릴게요
      </Desc>
      <Button>
        <button type="button" className="btn btn-outline-dark btn-lg">
          START
        </button>
      </Button>
    </ItemContainer>
  </Container>
);

export default MainPresenter;
