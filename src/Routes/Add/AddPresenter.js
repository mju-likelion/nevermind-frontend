import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import $ from "jquery";

const TextContainer = styled.div`
  display: flex;
  margin-top: 5%;
  justify-content: left;
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin: 0px auto;
`;

$(function () {
  var $input = $("#fee");
  $input.on("keyup", function () {
    // 입력 값 알아내기
    var _this = this;
    numberFormat(_this);
  });
});

// 콤마 찍기
function comma(str) {
  str = String(str);
  return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
}

// 콤마 풀기
function uncomma(str) {
  str = String(str);
  return str.replace(/[^\d]+/g, "");
}

function numberFormat(obj) {
  obj.value = comma(uncomma(obj.value));
}

const AddPresenter = ({
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
  handleSubmit,
}) => (
  <div
    className="modal fade"
    id="exampleModalLong"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLongTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">
            구독 추가
          </h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            const appName = event.target.appname.value;
            const fee = event.target.fee.value;
            const type = event.target.type.value;
            handleSubmit(appName, fee, type);
          }}
        >
          <div className="modal-body">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="validationServer01">App Name</label>
                <input
                  type="text"
                  name="appname"
                  className="mt-2 form-control"
                  aria-describedby="validatedInputGroupPrepend"
                  data-toggle="tooltip"
                  data-placement="top"
                  data-html="true"
                  required
                />
              </div>
              <div className="form-group form-inline col-md-6">
                <label htmlFor="validationServer01">Subscription Fee</label>
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
                &nbsp; 원
              </div>
            </div>
            <div className="form-group">
              <label className="mr-sm-2 sr-only" for="inlineFormCustomSelect">
                Subscription Type
              </label>
              <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" name="type">
                <option selected>Subscription Type</option>
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
                selected={startDate}
                onChange={handleStartDateChange}
              ></DatePicker>
            </TextContainer>
            <TextContainer>
              End Date :&nbsp;
              <DatePicker
                dateFormat="yyyy-MM-dd"
                selected={endDate}
                onChange={handleEndDateChange}
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

AddPresenter.propTypes = {
  appName: PropTypes.string,
  bill: PropTypes.number,
  type: PropTypes.string,
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default AddPresenter;
