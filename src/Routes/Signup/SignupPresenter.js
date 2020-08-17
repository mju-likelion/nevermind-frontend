import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";

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

const Input = styled.div`
  margin-top: 30px;
  position: absolute;
  left: 37%;
`;

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
    <Logo width="90px" height="80px"></Logo>
    <FormContainer>
      <Form>
        <Input>
          <div class="form-group row">
            <label
              for="colFormLabelLg"
              class="col-sm-2 col-form-label col-form-label-lg"
            >
              Email
            </label>
            <div class="col-sm-10">
              <input
                type="email"
                class="form-control form-control-lg"
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
