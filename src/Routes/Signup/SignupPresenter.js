import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";
import $ from "jquery";
import nevAxios from "Src/nev-axios";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  margin: 0px auto;
`;
const TextContainer = styled.div`
  display: flex;
  margin-top: 5%;
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

const GotoLogin = styled.span`
  color: #ca444a;
`;

function initTooltip() {
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
}
function setSignupTooltipTitleByName(name, title_txt) {
  $(`[name="${name}"]`).attr("title", title_txt);
}
function setSignupTooltipTitleForTermLabels(title_txt) {
  $(".term-label").attr("title", title_txt);
}
function setSignupTooltip() {
  initTooltip();
  setSignupTooltipTitleByName("username", "이름을 입력하세요");
  setSignupTooltipTitleByName("cellphone", "전화번호 입력 후<br>본인인증을 클릭하세요");
  setSignupTooltipTitleByName("verify_cellphone", "인증 페이지로 이동합니다");
  setSignupTooltipTitleByName("email", "이메일을 입력하세요");
  setSignupTooltipTitleByName("pwd", "비밀번호를 입력하세요");
  setSignupTooltipTitleByName("pwd_confirm", "비밀번호를<br>한번 더 입력하세요");
  setSignupTooltipTitleForTermLabels("필수 약관입니다");
}

function setValidation() {
  $('input:not("[type=submit]")').each((i, e) => {
    const inputHandler = function () {
      if ($(this).val().length > 0) {
        $(this).addClass("is-valid");
        $(this).removeClass("is-invalid");
      } else {
        $(this).addClass("is-invalid");
        $(this).removeClass("is-valid");
      }
    };
    $(e).click(inputHandler);
    $(e).keyup(inputHandler);
  });
}

async function register() {
  const res = await nevAxios.register({
    email: $('[name="email"]').val(),
    pwd: $('[name="pwd"]').val(),
    username: $('[name="username"]').val(),
    cellphone: $('[name="cellphone"]').val(),
  });
  console.log(res.data);
}

const SignupPresenter = () => {
  useEffect(() => {
    setSignupTooltip();
    setValidation();
  });
  return (
    <Container>
      <Helmet>
        <title>Sign Up | Nevermind</title>
      </Helmet>
      <TextContainer>
        <Logo width="90px" height="80px"></Logo>
        <Text>회원가입</Text>
      </TextContainer>
      <Form className="mt-3">
        <div className="mb-3">
          <label htmlFor="validationServer01">Name</label>
          <input
            type="text"
            name="username"
            className="mt-2 form-control"
            aria-describedby="validatedInputGroupPrepend"
            data-toggle="tooltip"
            data-placement="top"
            data-html="true"
            required
          />
        </div>
        <div className="d-flex">
          <div className="form-group">
            <label htmlFor="validationServer01">Cell_Phone</label>
            <input
              type="tel"
              name="cellphone"
              className="mt-2 form-control"
              aria-describedby="validatedInputGroupPrepend"
              data-toggle="tooltip"
              data-placement="top"
              data-html="true"
              required
            />
          </div>
          <div className="d-flex flex-column justify-content-center mt-2 ml-3">
            <button
              type="button"
              className="btn btn-light"
              name="verify_cellphone"
              data-toggle="tooltip"
              data-placement="top"
              data-html="true"
            >
              본인인증
            </button>
          </div>
        </div>

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
        </div>
        <div className="mb-3">
          <label htmlFor="validationServer01">Confirm Password</label>
          <input
            type="password"
            name="pwd_confirm"
            className="mt-2 form-control"
            aria-describedby="validatedInputGroupPrepend"
            data-toggle="tooltip"
            data-placement="top"
            data-html="true"
            required
          />
        </div>

        <div className="custom-control custom-checkbox mb-2 was-validated">
          <input
            type="checkbox"
            className="custom-control-input"
            id="agree_nevermind_term_of_use"
            required
          />
          <label
            className="mt-2 pt-1 custom-control-label term-label"
            htmlFor="agree_nevermind_term_of_use"
            data-toggle="tooltip"
            data-placement="top"
            data-html="true"
          >
            Never Mind 이용을 위한 필수 이용약관
          </label>
        </div>

        <div className="custom-control custom-checkbox mb-2 was-validated">
          <input
            type="checkbox"
            className="custom-control-input"
            id="agree_open_banking_term_of_use"
            required
          />
          <label
            className="mt-2 pt-1 custom-control-label term-label"
            htmlFor="agree_open_banking_term_of_use"
            data-toggle="tooltip"
            data-placement="top"
            data-html="true"
          >
            오픈뱅킹서비스 이용약관
          </label>
        </div>

        <div className="custom-control custom-checkbox mb-3 was-validated">
          <input
            type="checkbox"
            className="custom-control-input"
            id="agree_privacy_policy"
            required
          />
          <label
            className="mt-2 pt-1 custom-control-label term-label"
            htmlFor="agree_privacy_policy"
            data-toggle="tooltip"
            data-placement="top"
            data-html="true"
          >
            개인정보 처리 방침
          </label>
        </div>
        <div className="d-flex justify-content-center">
          <Link to={"Login"}>
            <button type="button" className="mt-1 btn btn-outline-dark" onClick={(e) => register()}>
              Submit
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
};

export default SignupPresenter;
