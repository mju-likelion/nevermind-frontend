import React, { Component } from "react";
import $ from "jquery";

export default class EmailAuth extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  handleClose() {
    $("#EmailAuth").modal("hide");
  }

  render() {
    return (
      <div
        className="modal fade"
        id="EmailAuth"
        tabindex="-1"
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
                    id="email"
                    type="text"
                    name="email"
                    value={this.props.email}
                    className="mt-2 "
                    data-placement="top"
                    data-html="true"
                  />
                </div>
                <div className="d-flex flex-column justify-content-center mt-2 ml-3">
                  <button
                    id="call_input_text"
                    type="button"
                    className="btn btn-light"
                    data-toggle="modal"
                    data-target="#EmailAuth"
                    data-placement="top"
                    data-html="true"
                  >
                    인증 메일 발송
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
