import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AppList from "Components/AppList";
import $ from "jquery";
import Logo from "Components/Logo";

const TextContainer = styled.div`
  display: flex;
  margin-top: 5%;
  justify-content: left;
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin: 0px auto;
`;

class AddPresenter extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { appName: "" };

    this.handleAppNameSelect = this.handleAppNameSelect.bind(this);
    this.handleAppNameChange = this.handleAppNameChange.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    $(
      function () {
        var $input = $("#fee");
        $input.on(
          "keyup",
          function (event) {
            // 입력 값 알아내기
            this.numberFormat(event.target);
          }.bind(this)
        );
      }.bind(this)
    );

    $("#addForm").on(
      "hidden.bs.modal",
      function (event) {
        if (event.target.id === "addForm") {
          $("#fee").val("");
          $("#type").val("default");
          this.handleAppNameSelect("");
          this.props.initForm();
        }
      }.bind(this)
    );
  }

  handleAppNameSelect(appName) {
    this.setState({ appName });
  }

  handleAppNameChange(event) {
    let appName = event.target.value;
    this.handleAppNameSelect(appName);
    this.props.handleAppSelect(null, appName);
  }

  handleClose() {
    $("#addForm").modal("hide");
  }

  comma(str) {
    // 콤마 찍기
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
  }
  uncomma(str) {
    // 콤마 풀기
    str = String(str);
    return str.replace(/[^\d]+/g, "");
  }
  numberFormat(obj) {
    obj.value = this.comma(this.uncomma(obj.value));
  }

  render() {
    return (
      <div
        className="modal fade "
        id="addForm"
        tabindex="-1"
        role="dialog"
        aria-labelledby="addFormTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog " role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addFormTitle">
                구독 추가
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                const appImg = this.props.appImg;
                const appName = event.target.appname.value;
                const fee = event.target.fee.value;
                const type = event.target.type.value;
                const startDate = this.props.startDate;
                const endDate = this.props.endDate;
                this.props.handleSubmit(appImg, appName, fee, type, startDate, endDate);
                this.handleClose();
              }}
            >
              <div className="modal-body">
                <div className="form-group d-flex flex-column align-items-center">
                  <img
                    src={this.props.appImg}
                    width="100"
                    height="100"
                    name="appimg"
                    aria-describedby="validatedInputGroupPrepend"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-html="true"
                    required
                    className="rounded-lg"
                  />
                </div>
                <div className="d-flex">
                  <div className="form-group">
                    <label htmlFor="validationServer01">App Name</label>
                    <input
                      name="appname"
                      value={this.state.appName}
                      onChange={this.handleAppNameChange}
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
                      name="auto_appname"
                      data-toggle="modal"
                      data-target="#appList"
                      data-html="true"
                    >
                      App_List
                    </button>
                    <AppList
                      handleAppSelect={this.props.handleAppSelect}
                      handleAppNameSelect={this.handleAppNameSelect}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="validationServer01">Subscription Fee&nbsp; (KRW)</label>
                  <input
                    type="text"
                    name="fee"
                    id="fee"
                    className="mt-2 form-control"
                    aria-describedby="validatedInputGroupPrepend"
                    data-toggle="tooltip"
                    data-placement="top"
                    data-html="true"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="mr-sm-2 sr-only" for="type">
                    Subscription Type
                  </label>
                  <select className="custom-select mr-sm-2" id="type" name="type" required>
                    <option value="default" selected>
                      Subscription Type
                    </option>
                    <option value="week">Week</option>
                    <option value="month">Month</option>
                    <option value="year">Year</option>
                    <option value="lifetime">Life Time</option>
                  </select>
                </div>
                <TextContainer>
                  Start Date :&nbsp;
                  <DatePicker
                    dateFormat="yyyy-MM-dd"
                    selected={this.props.startDate}
                    onChange={this.props.handleStartDateChange}
                  ></DatePicker>
                </TextContainer>

                <TextContainer>
                  End&nbsp;&nbsp; Date :&nbsp;
                  <DatePicker
                    dateFormat="yyyy-MM-dd"
                    selected={this.props.endDate}
                    onChange={this.props.handleEndDateChange}
                  ></DatePicker>
                </TextContainer>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

AddPresenter.propTypes = {
  appName: PropTypes.string.isRequired,
  bill: PropTypes.number.isRequired,
  type: PropTypes.oneOf(["week", "month", "year", "lifetime"]).isRequired,
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddPresenter;
