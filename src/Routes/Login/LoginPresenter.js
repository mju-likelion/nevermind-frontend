import React from "react";
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
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  margin: 0px auto;
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const Text = styled.div`
  font-size: 35px;
  display: flex;
  margin-top: 27px;
  margin-left: 17px;
`;

const AskSignup = styled.p`
  color: grey;
  text-align: center;
`;

const GotoLogin = styled.a`
  color: #ca444a;
`;

const ForgotPW = styled.a`
  color: grey;
  font-size: 13px;
`;

const LoginPresenter = () => (
  <Container className>
    <Helmet>
      <title>Login | Nevermind</title>
    </Helmet>
    <Sidebar></Sidebar>
    <TextContainer>
      <Logo width="90px" height="80px"></Logo>
      <Text>로그인</Text>
    </TextContainer>
    <Form className="mt-3">
      <div className="d-flex">
        <div className="form-group">
          <div className="mb-3">
            <label htmlFor="validationServer01">E-mail</label>
            <input
              type="text"
              name="email"
              className="mt-2 form-control"
              aria-describedby="validatedInputGroupPrepend"
              data-toggle="tooltip"
              data-placement="top"
              data-html="true"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="validationServer01">Password</label>
            <input
              type="password"
              name="pwd"
              className="mt-2 form-control"
              aria-describedby="validatedInputGroupPrepend"
              data-toggle="tooltip"
              data-placement="top"
              data-html="true"
              required
            />
            <Link to={"Login"}>
              <ForgotPW>비밀번호 찾기</ForgotPW>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <Link to={"Login"}>
          <button type="button" className="mt-1 mb-3 btn btn-outline-dark">
            로그인
          </button>
        </Link>
      </div>
    </Form>

    <AskSignup className="my-3">
      이미 가입하셨나요?&nbsp;
      <Link to={"Login"}>
        <GotoLogin>로그인하기</GotoLogin>
      </Link>
    </AskSignup>
  </Container>
);

export default LoginPresenter;
