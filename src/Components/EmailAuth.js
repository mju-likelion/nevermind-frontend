import React, { Component } from "react";
import $ from "jquery";

export default class EmailAuth extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.handleVerifyAuthNum = this.handleVerifyAuthNum.bind(this);
  }
  handleClose() {
    $("#EmailAuth").modal("hide");
  }

  handleSendEmail(e) {
    alert("Email sent!");
  }

  handleVerifyAuthNum(e) {
    //
    alert("Verified");
    this.handleClose();
  }

  render() {
    return (
      <div
        className="modal fade"
        id="EmailAuth"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                이메일 인증
              </h5>
              <button
                type="button"
                className="close"
                onClick={this.handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="d-flex">
                <div className="form-group">
                  <div>E-mail</div>
                  <input
                    id="auth_email"
                    type="email"
                    name="email"
                    value={this.props.email}
                    className="mt-2 "
                    data-placement="top"
                    data-html="true"
                    readOnly
                  />
                </div>
                <div className="d-flex flex-column justify-content-center mt-2 ml-3">
                  <button
                    id="call_input_text"
                    type="button"
                    className="btn btn-light"
                    onClick={this.handleSendEmail}
                  >
                    인증 메일 발송
                  </button>
                </div>
              </div>
              <div className="d-flex">
                <div className="form-group mt-3">
                  <div>인증번호</div>
                  <input id="auth_num" type="text" className="mt-2" />
                </div>
                <div className="d-flex flex-column justify-content-center mt-3 ml-3">
                  <button
                    id="submit_authnum"
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={this.handleVerifyAuthNum}
                  >
                    인증번호 확인
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
