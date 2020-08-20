// 로그인 된 후의 상황인 Navbar
import React from "react";
import styled from "styled-components";
import notice from "assets/notice.svg";
import home from "assets/home.svg";
import service from "assets/service.svg";
import user from "assets/user.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 8%;
  background-color: #263d66;
  height: 100%;
  display: block;
  position: fixed;
  overflow: auto;
`;

const Navbar = () => (
  <Container>
    <Link to={"Main"}>
      <button type="button" class="mt-4 mb-5 btn w-100">
        <img src={home} />
      </button>
    </Link>
    <Link to={"Main"}>
      <button type="button" class="mt-5 mb-5 btn w-100">
        <img src={user} />
      </button>
    </Link>
    <Link to={"Main"}>
      <button type="button" class="mt-5 mb-5 btn w-100">
        <img src={notice} />
      </button>
    </Link>
    <Link to={"Service"}>
      <button type="button" class="mt-5 mb-5 btn w-100">
        <img src={service} />
      </button>
    </Link>
  </Container>
);

export default Navbar;
