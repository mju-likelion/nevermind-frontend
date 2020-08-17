import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";

const Container = styled.div``;

const RestIcon = styled.img.attrs({
  src: "./logo.png",
})`
  width: 90px;
  height: 80px;
  display: block;
  margin: 0px auto;
  margin-top: 40px;
`;

const Input = styled.input``;

const Form = styled.form`
  display: block;
  margin: 0px auto;
`;

const FormContainer = styled.div``;

const MainPresenter = () => (
  <Container>
    <Helmet>
      <title>Sign Up | Nevermind</title>
    </Helmet>
    <RestIcon></RestIcon>
    <FormContainer>
      <Form>
        <Input></Input>
      </Form>
    </FormContainer>
  </Container>
);

export default MainPresenter;
