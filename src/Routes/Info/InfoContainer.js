import React from "react";
import InfoPresenter from "./InfoPresenter";
import nevAxios from "Src/nev-axios";
import $ from "jquery";

export default class InfoContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: null,
      username: null,
      cellphone: null,
    };
    this.handleUnregister = this.handleUnregister.bind(this);
    this.handleuserinfo = this.handleuserinfo.bind(this);
  }

  handleClose() {
    $("#QuitNeverMind").modal("hide");
  }

  async handleuserinfo() {
    const res = await nevAxios.getprofile();
    this.setState({
      email: res.data.email,
      username: res.data.username,
      cellphone: res.data.cellphone,
    });
  }

  async handleUnregister() {
    const res = await nevAxios.unregister();
    if (res.data.hasOwnProperty("is_unregister")) {
      if (res.data.is_unregister) {
        alert("회원탈퇴 되셨습니다.\n이용해주셔서 감사합니다.");
      } else {
        alert(res.data.error_msg);
      }
    } else {
      alert("연결이 끊겼습니다.\n네트워크 연결 확인 후 다시 접속해주세요.");
    }
    this.handleClose();
  }

  render() {
    const { email, username, cellphone } = this.state;

    return (
      <InfoPresenter
        email={email}
        username={username}
        cellphone={cellphone}
        handleuserinfo={this.handleuserinfo}
        handleUnregister={this.handleUnregister}
        handleClose={this.handleClose}
      />
    );
  }
}
