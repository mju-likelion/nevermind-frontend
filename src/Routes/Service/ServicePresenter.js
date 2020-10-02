import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Logo from "Components/Logo";
import { Link } from "react-router-dom";
import AddContainer from "Routes/Add";
import $ from "jquery";

const SideBarContainer = styled.div`
  margin-top: 7%;
  background-color: white;
  width: 17%;
  display: flex;
  flex-direction: column;
`;
const SideBarItem = styled.button`
  height: 55px;
  border: 0;
  outline: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 5px solid ${(props) => (props.onClick ? "#7BA2E0" : "transparent")};
  transition: border-left 0.5s ease-in-out;
  transition: border-left 0.5s ease-in-out;
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
  padding: 10px;
  background-color: #ec8a7f;
  width: 43%;
  height: 25%;
  margin-left: 5%;
  margin-top: 2%;
  border-radius: 20px;
  display: inline-block;
`;

const AlreadyPaid = styled.div`
  padding: 10px;
  background-color: #5dbf5d;
  width: 39%;
  height: 25%;
  margin-left: 8%;
  margin-top: 2%;
  border-radius: 20px;
  display: inline-block;
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

const ItemContainer = styled.div`
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
  font-size: 18px;
`;

const Company = styled.div`
  color: grey;
  font-size: 13px;
`;

class ServicePresenter extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = { type: null, bgColor: true };
  }
  handleTypeChange = (type) => {
    this.setState({
      type,
      bgColor: true,
    });
  };
  ChangeColor() {
    this.setState({ bgColor: !this.state.bgColor });
  }
  render() {
    let bgColor = this.state.bgColor ? "#ebebeb" : "white";
    return (
      <Container className="position-relative">
        <Helmet>
          <title>Service | Nevermind</title>
        </Helmet>
        <AddButton data-toggle="modal" data-target="#addForm">
          +ADD
        </AddButton>
        <AddContainer />
        <SideBarContainer>
          <SideBarItem style={{ backgroundColor: bgColor }} onClick={this.ChangeColor.bind(this)}>
            ALL
          </SideBarItem>

          <SideBarItem style={{ backgroundColor: bgColor }} onClick={this.ChangeColor.bind(this)}>
            Week
          </SideBarItem>

          <SideBarItem style={{ backgroundColor: bgColor }} onClick={this.ChangeColor.bind(this)}>
            Month
          </SideBarItem>
          <SideBarItem style={{ backgroundColor: bgColor }} onClick={this.ChangeColor.bind(this)}>
            Year
          </SideBarItem>

          <SideBarItem style={{ backgroundColor: bgColor }} onClick={this.ChangeColor.bind(this)}>
            Life Time
          </SideBarItem>
        </SideBarContainer>
        <SubType>ALL</SubType>
        <ViewContainer>
          <EstiExpend></EstiExpend>
          <AlreadyPaid></AlreadyPaid>
          {this.props.applist.map((item) => (
            <ItemContainer>
              <AppImage key={item.id} bgImage={item.artworkUrl100}></AppImage>
              <AppInfo>
                <AppName>{item.name}</AppName>
                <Company>{item.artistName}</Company>
              </AppInfo>
            </ItemContainer>
          ))}
        </ViewContainer>
      </Container>
    );
  }
}

export default ServicePresenter;
