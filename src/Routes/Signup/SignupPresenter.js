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
            <label for="validationTextarea">Textarea</label>
            <div class="invalid-feedback">Please enter a message in the textarea.</div>
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

          <div class="custom-control custom-radio">
            <input
              type="radio"
              class="custom-control-input"
              id="customControlValidation2"
              name="radio-stacked"
              required
            />
            <label class="custom-control-label" for="customControlValidation2">
              Toggle this custom radio
            </label>
          </div>
          <div class="custom-control custom-radio mb-3">
            <input
              type="radio"
              class="custom-control-input"
              id="customControlValidation3"
              name="radio-stacked"
              required
            />
            <label class="custom-control-label" for="customControlValidation3">
              Or toggle this other custom radio
            </label>
            <div class="invalid-feedback">More example invalid feedback text</div>
          </div>

          <div class="mb-3">
            <select class="custom-select" required>
              <option value="">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <div class="invalid-feedback">Example invalid custom select feedback</div>
          </div>

          <div class="custom-file mb-3">
            <input type="file" class="custom-file-input" id="validatedCustomFile" required />
            <label class="custom-file-label" for="validatedCustomFile">
              Choose file...
            </label>
            <div class="invalid-feedback">Example invalid custom file feedback</div>
          </div>

          <div class="mb-3">
            <div class="input-group is-invalid">
              <div class="input-group-prepend">
                <span class="input-group-text" id="validatedInputGroupPrepend">
                  @
                </span>
              </div>
              <input
                type="text"
                class="form-control is-invalid"
                aria-describedby="validatedInputGroupPrepend"
                required
              />
            </div>
            <div class="invalid-feedback">Example invalid input group feedback</div>
          </div>

          <div class="mb-3">
            <div class="input-group is-invalid">
              <div class="input-group-prepend">
                <label class="input-group-text" for="validatedInputGroupSelect">
                  Options
                </label>
              </div>
              <select class="custom-select" id="validatedInputGroupSelect" required>
                <option value="">Choose...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="invalid-feedback">Example invalid input group feedback</div>
          </div>

          <div class="input-group is-invalid">
            <div class="custom-file">
              <input
                type="file"
                class="custom-file-input"
                id="validatedInputGroupCustomFile"
                required
              />
              <label class="custom-file-label" for="validatedInputGroupCustomFile">
                Choose file...
              </label>
            </div>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                Button
              </button>
            </div>
          </div>
          <div class="invalid-feedback">Example invalid input group feedback</div>
        </form>
      </InputContainer>
    </Form>
  </Container>
);

export default MainPresenter;
