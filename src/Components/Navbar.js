import React from "react";
import styled from "styled-components";
import notice from "assets/notice.svg";
import home from "assets/home.svg";
import service from "assets/service.svg";
import user from "assets/user.svg";

const Container = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 8%;
  background-color: #263d66;
  height: 100%;
  position: fixed;
  overflow: auto;
`;

const Navbar = () => (
  <Container>
    <button type="button" class="btn w-100">
      <img src={home} />
    </button>
    <button type="button" class="btn w-100">
      <img src={user} />
    </button>
    <button type="button" class="btn w-100">
      <img src={notice} />
    </button>
    <button type="button" class="btn w-100">
      <img src={service} />
    </button>
  </Container>
);

export default Navbar;
