import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Form = styled.form`
  margin: 0px auto;
`;

const AddPresenter = ({
  appName,
  bill,
  type,
  startDate,
  endDate,
  handleStartDateChange,
  handleEndDateChange,
}) => (
  <Container>
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={startDate}
      onChange={handleStartDateChange}
    ></DatePicker>
    <DatePicker
      dateFormat="yyyy-MM-dd"
      selected={endDate}
      onChange={handleEndDateChange}
    ></DatePicker>
  </Container>
);

AddPresenter.propTypes = {
  appName: PropTypes.string,
  bill: PropTypes.number,
  type: PropTypes.string,
  handleStartDateChange: PropTypes.func.isRequired,
  handleEndDateChange: PropTypes.func.isRequired,
};

export default AddPresenter;
