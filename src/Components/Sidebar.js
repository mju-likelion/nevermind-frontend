import React from "react";
import styled from "styled-components";
import notice from "assets/notice.svg";

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

const Sidebar = () => (
  <Container>
    <button type="button" class="btn btn-default btn-lg">
      <img src={notice} />
    </button>
  </Container>
);

export default Sidebar;
