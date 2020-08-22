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
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Desc = styled.p`
  font-size: 35px;
  margin-top: 50px;
  text-align: center;
  word-break: keep-all;
`;

const Button = styled.button`
  text-align: center;
  margin-top: 60px;
`;

const Align = styled.div`
  display: flex;
  justify-content: center;
`;

const MainPresenter = () => (
  <Container>
    <Helmet>
      <title>Main | Nevermind</title>
    </Helmet>
    <ItemContainer>
      <div className="w-100">
        <Align>
          <Logo width="220px" height="195px"></Logo>
        </Align>
        <Desc>
          매달 신경쓰였던 '구독정보' <br />
          <br />
          이제 Never Mind가 대신 알려드릴게요
        </Desc>
        <Align>
          <Link to={"Signup"}>
            <Button type="button" className="btn btn-outline-dark btn-lg">
              START
            </Button>
          </Link>
        </Align>
      </div>
    </ItemContainer>
  </Container>
);

export default MainPresenter;
