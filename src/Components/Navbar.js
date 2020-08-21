// 로그인 된 후의 상황인 Navbar
import React from "react";
import styled from "styled-components";
import notice from "assets/notice.svg";
import home from "assets/home.svg";
import service from "assets/service.svg";
import user from "assets/user.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #263d66;
  width: 5em;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  overflow: auto;
`;

const ImgLink = ({ to, imgSrc }) => (
  <Link to={to} className="d-flex h-100">
    <button type="button" className="btn">
      <img src={imgSrc} />
    </button>
  </Link>
);

const Navbar = () => (
  <Container className="py-5">
    <ImgLink to="Main" imgSrc={home} />
    <ImgLink to="Main" imgSrc={user} />
    <ImgLink to="Main" imgSrc={notice} />
    <ImgLink to="Service" imgSrc={service} />
  </Container>
);

export default Navbar;
