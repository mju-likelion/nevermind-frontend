import React, { Component } from "react";
import PropTypes from "prop-types";
import $ from "jquery";
import nevAxios from "Src/nev-axios";

export default class AppList extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      appImg: null,
      appName: null,
      appList: null,
    };
  }

  componentDidMount() {
    (async () => {
      const appListRes = await nevAxios.applist();
      this.setState({ appList: appListRes.data.applist.feed.results });
    })();
  }

  handleClose() {
    $("#appList").modal("hide");
  }

  render() {
    return (
      <div
        className="modal fade"
        id="appList"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                App List
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
              <div className="d-flex flex-column">
                {this.state.appList ? (
                  this.state.appList.map((app) => (
                    <button
                      key={app.id}
                      type="button"
                      className="text-left d-flex m-2 rounded-lg btn btn-outline-dark"
                      onClick={(event) => {
                        event.preventDefault();
                        const AppImg = event.target.firstChild.src;
                        const AppName = event.target.lastChild.textContent;
                        this.props.handleAppNameSelect(AppName);
                        this.props.handleAppSelect(AppImg, AppName);
                        this.handleClose();
                      }}
                    >
                      <img
                        name="appimg"
                        src={app.artworkUrl100}
                        style={{ width: "30px", height: "30px" }}
                        className="m-2 mr-3 rounded-lg"
                      />
                      <div name="appname" className="mt-3">
                        {app.name}
                      </div>
                    </button>
                  ))
                ) : (
                  <h3>Loading...</h3>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
