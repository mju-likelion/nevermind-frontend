import React, { Component, useEffect } from "react";
import DatePicker from "react-datepicker";
import AppList from "Components/AppList";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";
import AddContainer from "Routes/Add";
import $ from "jquery";
import Sidebar from "../../Components/Sidebar";

const TextContainer = styled.div`
  display: flex;
  margin-top: 5%;
  justify-content: left;
  margin-bottom: 20px;
`;

const Form = styled.form`
  margin: 0px auto;
`;

const Container = styled.div`
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  overflow: auto;
`;

const ViewContainer = styled.div`
  margin-top: 7%;
  margin-left: 0%;
  width: 100%;
  background-color: #ebebeb;
  display: block;
  overflow: scroll;
`;

const AddButton = styled.button`
  display: flex;
  position: absolute;
  border-radius: 7px;
  margin-top: 3%;
  margin-left: 5.5%;
  background-color: #e65857;
  border: none;
  width: 70px;
  height: 30px;
  justify-content: center;
  color: white;
  text-align: center;
  line-height: 1.9em;
  :hover {
    background-color: white;
    border: 1px solid red;
    color: black;
  }
`;

const SubType = styled.div`
  margin-top: 3%;
  margin-left: 18%;
  display: flex;
  position: absolute;
  color: #669ed1;
  font-size: 30px;
`;

const EstiExpend = styled.div`
  padding: 20px;
  background-color: #ec8a7f;
  width: 43%;
  height: 25%;
  margin-left: 5%;
  margin-right: 8%;
  margin-top: 2%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  float: left;
  color: white;
`;

const AlreadyPaid = styled.div`
  padding: 20px;
  background-color: #5dbf5d;
  width: 39%;
  height: 25%;
  margin-left: 8%;
  margin-top: 2%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  color: white;
`;

const SubItem = styled.div`
  padding: 10px;
  background-color: white;
  width: 69%;
  height: 23%;
  margin-left: 4.3%;
  margin-top: 15%;
  border-radius: 20px;
  position: absolute;
`;

const ItemContainer = styled.button`
  padding: 10px;
  background-color: #ffffff;
  width: 90%;
  height: 25%;
  margin-left: 5%;
  margin-top: 2%;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const AppImage = styled.div`
  background-image: url(${(props) => props.bgImage});
  height: 100px;
  width: 100px;
  background-size: cover;
  border-radius: 15px;
  border: solid 1px lightblue;

  margin-left: 3%;
`;

const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4%;
`;

const AppName = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
`;

const Period = styled.div`
  color: grey;
  font-size: 13px;
`;

const AppInfo_2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 4%;
  text-align: center;
`;

const AppBill = styled.div`
  font-size: 20px;
  margin-bottom: 40px;
`;
const AppType = styled.div`
  color: grey;
  font-size: 18px;
`;
class ServicePresenter extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {};
  }

  render() {
    const calcBill = this.props.calculateBill();

    return (
      <Container className="position-relative">
        <Helmet>
          <title>Service | Nevermind</title>
        </Helmet>
        <AddButton data-toggle="modal" data-target="#addForm">
          +ADD
        </AddButton>
        <AddContainer />
        <Sidebar
          handleSidebarClick={this.props.handleSidebarClick}
          typeClicked={this.props.typeClicked}
        />
        <SubType id="sub_type" />
        <ViewContainer>
          <EstiExpend>
            <div className="h5 pb-5">예상 지출 :</div>
            <dl className="row">
              <dt className="col-md-4 pb-1 h5  text-center ">한 주에</dt>
              <dt className="col-md-4 h5 text-center ">달마다</dt>
              <dt className="col-md-4 h5 text-center ">연간</dt>
            </dl>
            <dl className="row">
              <dt className="col-md-4 h5 text-center">
                {calcBill["week_bill"]}원
              </dt>
              <dt className="col-md-4 h5 text-center">
                {calcBill["month_bill"]}원
              </dt>
              <dt className="col-md-4 h5 text-center">
                {calcBill["year_bill"]}원
              </dt>
            </dl>
          </EstiExpend>
          <AlreadyPaid>
            <div className="h5 pb-5">이미 지불한 비용:</div>
            <dl className="row ">
              <dt className="pb-1 h5 align-items-center "></dt>
            </dl>
          </AlreadyPaid>
          {this.props.applist.map((item) => (
            <ItemContainer
              data-toggle="modal"
              data-target="#Form"
              key={item.app_id}
              onClick={() => this.props.handleOnclick(item)}
            >
              <div className="d-flex align-items-center flex-grow-1">
                <AppImage bgImage={item.app_img_url} />
                <AppInfo>
                  <AppName>{item.app_name}</AppName>
                  <Period>
                    {item.startdate} ~ {item.enddate}
                  </Period>
                </AppInfo>
              </div>
              <AppInfo_2 className="flex-grow-1 align-items-end">
                <AppBill>{item.bill}원</AppBill>
                <AppType>{item.sub_type_label}</AppType>
              </AppInfo_2>
            </ItemContainer>
          ))}

          <div
            className="modal fade "
            id="Form"
            tabindex="-1"
            role="dialog"
            aria-labelledby="addFormTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog " role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="addFormTitle">
                    구독 정보
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>

                <Form
                  value={this.props.selectedItem}
                  onSubmit={(event) => {
                    event.preventDefault();
                    const appImg = this.props.appImg;
                    const appName = event.target.appname.value;
                    const fee = event.target.fee.value;
                    const type = event.target.type.value;
                    const startDate = this.props.startDate;
                    const endDate = this.props.endDate;
                    this.props.handleSubmit(
                      appImg,
                      appName,
                      fee,
                      type,
                      startDate,
                      endDate
                    );
                    this.handleClose();
                  }}
                >
                  <div className="modal-body">
                    <div className="form-group d-flex flex-column align-items-center">
                      <img
                        src={this.props.selectedItem.app_img_url}
                        width="100"
                        height="100"
                        name="appimg"
                        aria-describedby="validatedInputGroupPrepend"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-html="true"
                        required
                        className="border border-info rounded-lg"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="validationServer01">App Name</label>
                      <input
                        name="appname"
                        value={this.props.selectedItem.app_name}
                        onChange={this.handleAppNameChange}
                        className="mt-2 form-control"
                        aria-describedby="validatedInputGroupPrepend"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-html="true"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="validationServer01">
                        Subscription Fee&nbsp; (KRW)
                      </label>
                      <input
                        type="text"
                        value={this.props.selectedItem.bill}
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
                      <select
                        className="custom-select mr-sm-2"
                        id="type"
                        name="type"
                        required
                      >
                        <option value="default" selected>
                          {this.props.selectedItem.sub_type_label}
                        </option>
                        <option value="week">week</option>
                        <option value="month">month</option>
                        <option value="year">year</option>
                        <option value="lifetime">life_time</option>
                      </select>
                    </div>
                    <TextContainer>
                      Start Date :&nbsp;
                      <DatePicker
                        dateFormat="yyyy-MM-dd"
                        value={this.props.selectedItem.startdate}
                        selected={this.props.startDate}
                        onChange={this.props.handleStartDateChange}
                      ></DatePicker>
                    </TextContainer>

                    <TextContainer>
                      End&nbsp;&nbsp; Date :&nbsp;
                      <DatePicker
                        dateFormat="yyyy-MM-dd"
                        value={this.props.selectedItem.enddate}
                        selected={this.props.endDate}
                        onChange={this.props.handleEndDateChange}
                      ></DatePicker>
                    </TextContainer>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Delete
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </ViewContainer>
      </Container>
    );
  }
}

export default ServicePresenter;
