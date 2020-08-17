import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputContainer = styled.div`
  margin-top: 30px;
`;

const Input = styled.div`
  margin-bottom: 25px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
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
  margin-top: 30px;
`;

const GotoLogin = styled.a`
  color: #ca444a;
`;
const FormContainter = styled.div``;

const MainPresenter = () => (
  <Container className="my-4">
    <Helmet>
      <title>Sign Up | Nevermind</title>
    </Helmet>
    <TextContainer>
      <Logo width="90px" height="80px"></Logo>
      <Text>회원가입</Text>
    </TextContainer>
    <Form>
      <InputContainer>
        <form className="was-validated">
          <div className="mb-3">
            <label for="validationServer01">Name</label>
            <input
              type="text"
              name="username"
              className="mt-2 form-control is-invalid"
              aria-describedby="validatedInputGroupPrepend"
              required
            />
          </div>

          <div className="d-flex">
            <div className="form-group">
              <label for="validationServer01">Cell_Phone</label>
              <input
                type="text"
                name="cellphone"
                className="mt-2 form-control is-invalid"
                aria-describedby="validatedInputGroupPrepend"
                required
              />
            </div>
            <div className="d-flex flex-column justify-content-center mt-2 ml-3">
              <button type="button" className="btn btn-light">
                본인인증
              </button>
            </div>
          </div>

          <div className="mb-3">
            <label for="validationServer01">E-mail</label>
            <input
              type="text"
              name="email"
              className="mt-2 form-control is-invalid"
              aria-describedby="validatedInputGroupPrepend"
              required
            />
          </div>

          <div className="mb-3">
            <label for="validationServer01">Password</label>
            <input
              type="password"
              name="pwd"
              className="mt-2 form-control is-invalid"
              aria-describedby="validatedInputGroupPrepend"
              required
            />
          </div>
          <div className="mb-3">
            <label for="validationServer01">Confirmed Password</label>
            <input
              type="password"
              name="cofirmed_pwd"
              className="mt-2 form-control is-invalid"
              aria-describedby="validatedInputGroupPrepend"
              required
            />
          </div>

          <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customControlValidation1"
              required
            />
            <label
              className="mt-2 pt-1 custom-control-label"
              for="customControlValidation1"
            >
              Never Mind 이용을 위한 필수 이용약관
            </label>
          </div>

          <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customControlValidation2"
              required
            />
            <label
              className="mt-2 pt-1 custom-control-label"
              for="customControlValidation2"
            >
              오픈뱅킹서비스 이용약관
            </label>
          </div>

          <div className="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customControlValidation3"
              required
            />
            <label
              className="mt-2 pt-1 custom-control-label"
              for="customControlValidation3"
            >
              개인정보 처리 방침
            </label>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="mt-3 btn btn-outline-dark">
              Submit
            </button>
          </div>
        </form>
      </InputContainer>
    </Form>
    <AskSignup>
      이미 가입하셨나요?{" "}
      <GotoLogin href="https://naver.com">로그인하기</GotoLogin>
    </AskSignup>
  </Container>
);

export default MainPresenter;
