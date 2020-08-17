import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";

const Container = styled.div``;

const Input = styled.div`
  margin-top: 30px;
  position: absolute;
  left: 37%;
`;

const Form = styled.form`
  display: block;
  margin: 0px auto;
`;

const TextContainer = styled.div`
  display: grid;
`;

const Text = styled.div``;
const FormContainer = styled.div``;

const MainPresenter = () => (
  <Container>
    <Helmet>
      <title>Sign Up | Nevermind</title>
    </Helmet>
    <TextContainer>
      <Logo width="90px" height="80px"></Logo>
      <Text>회원가입</Text>
    </TextContainer>
    <FormContainer>
      <Form>
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
                type="email"
                className="form-control form-control-lg"
                id="colFormLabelLg"
                placeholder="col-form-label-lg"
              />
            </div>
          </div>
        </Input>
      </Form>
    </FormContainer>
  </Container>
);

export default MainPresenter;
