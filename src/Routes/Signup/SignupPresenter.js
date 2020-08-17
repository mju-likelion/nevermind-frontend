import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: ${window.innerHeight}px;
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

const FormContainter = styled.div``;

const MainPresenter = () => (
  <Container>
    <Helmet>
      <title>Sign Up | Nevermind</title>
    </Helmet>
    <TextContainer>
      <Logo width="90px" height="80px"></Logo>
      <Text>회원가입</Text>
    </TextContainer>
    <Form>
      <InputContainer>
        <form class="was-validated">
          <div class="mb-3">
            <label for="validationServer01">Name</label>
            <input
              type="text"
              name="username"
              class="form-control is-invalid"
              aria-describedby="validatedInputGroupPrepend"
              required
            />
          </div>

          <div class="mb-3">
            <label for="validationServer01">Cell_Phone</label>
            <input
              type="text"
              name="cellphone"
              class="form-control is-invalid"
              aria-describedby="validatedInputGroupPrepend"
              required
            />
          </div>

          <div class="mb-3">
            <label for="validationServer01">E-mail</label>
            <input
              type="text"
              name="email"
              name="cellphone"
              class="form-control is-invalid"
              aria-describedby="validatedInputGroupPrepend"
              required
            />
          </div>

          <div class="custom-control custom-checkbox mb-3">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customControlValidation1"
              required
            />
            <label class="custom-control-label" for="customControlValidation1">
              Check this custom checkbox
            </label>
            <div class="invalid-feedback">Example invalid feedback text</div>
          </div>
        </form>
      </InputContainer>
    </Form>
  </Container>
);

export default MainPresenter;
