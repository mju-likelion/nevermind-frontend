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
              <div className="d-flex flex-column"></div>
              <p>Email: {this.props.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
