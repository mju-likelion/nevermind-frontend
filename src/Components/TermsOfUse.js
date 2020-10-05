import React, { Component } from "react";

import $ from "jquery";

export default class TermsofUse extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  handleClose() {
    $("#TermsofUse").modal("hide");
  }

  render() {
    return (
      <div
        className="modal fade"
        id="TermsofUse"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                이용약관
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
                <iframe
                  src="./TermsOfUse.html"
                  width="600"
                  height="600"
                  frameborder="0"
                  allowtransparency="true"
                  title="Term"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
