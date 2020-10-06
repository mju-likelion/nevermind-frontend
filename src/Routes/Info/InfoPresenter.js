import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
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

const ModalContainer = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  margin: 0 auto;
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

const AskQuit = styled.p`
  color: grey;
  text-align: center;
`;

const QuitNeverMind = styled.a`
  color: #ca444a;
`;

const Button = styled.button`
  margin-left: 20px;
`;
export default class InfoPresenter extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Helmet>
          <title>Info | Nevermind</title>
        </Helmet>
        <TextContainer>
          <Logo width="90px" height="80px"></Logo>
          <Text>회원정보</Text>
        </TextContainer>
        <Item className="mt-3">
          <div className="mb-3 d-flex">
            <div className="mt-2">이메일</div>
            <div className="mt-2 ml-2">{this.props.email}</div>
          </div>
          <div className="mb-3 d-flex">
            <div className="mt-2">이름</div>
            <div className="mt-2 ml-4">{this.props.username}</div>
          </div>
        </Item>

        <AskQuit className="my-3">
          NEVER MIND 이용을 그만하고 싶으신가요?&nbsp;
          <QuitNeverMind
            id="modalbutton"
            type="button"
            data-toggle="modal"
            data-target="#QuitNeverMind"
            data-placement="top"
            data-html="true"
          >
            회원탈퇴하기
          </QuitNeverMind>
        </AskQuit>
        <div
          className="modal fade"
          id="QuitNeverMind"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  정말 탈퇴하시겠습니까
                </h5>
              </div>
              <div className="modal-body">
                <ModalContainer>
                  <div className="d-flex">
                    <Button
                      id="No"
                      type="button"
                      className="btn btn-light"
                      onClick={this.props.handleClose}
                    >
                      아니오
                    </Button>
                    <Button
                      id="No"
                      type="button"
                      className="btn btn-danger"
                      onClick={this.props.handleUnregister}
                    >
                      예
                    </Button>
                  </div>
                </ModalContainer>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
