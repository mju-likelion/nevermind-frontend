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
        <Input>
          <div className="form-group row">
            <label
              for="colFormLabelLg"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="username"
                className="form-control form-control-lg"
                id="colFormLabelLg"
                placeholder="col-form-label-lg"
              />
            </div>
          </div>
        </Input>
        <Input>
          <div className="form-group row">
            <label
              for="colFormLabelLg"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              Cell_Phone
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="cellphone"
                className="form-control form-control-lg"
                id="colFormLabelLg"
                placeholder="col-form-label-lg"
              />
            </div>
          </div>
        </Input>
        <Input>
          <div className="form-group row">
            <label
              for="colFormLabelLg"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="email"
                className="form-control form-control-lg"
                id="colFormLabelLg"
                placeholder="col-form-label-lg"
              />
            </div>
          </div>
        </Input>
        <Input>
          <div className="form-group row">
            <label
              for="colFormLabelLg"
              className="col-sm-2 col-form-label col-form-label-lg"
            >
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                name="password"
                className="form-control form-control-lg"
                id="colFormLabelLg"
                placeholder="col-form-label-lg"
              />
            </div>
          </div>
        </Input>
      </InputContainer>
    </Form>
  </Container>
);

export default MainPresenter;
