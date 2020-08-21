import React from "react";
import styled from "styled-components";
import $ from "jquery";

const Container = styled.div`
  margin-top: 7%;
  background-color: white;
  width: 17%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = ({ item }) => (
  <button type="button" className="btn p-4">
    {item}
  </button>
);

const Sidebar = () => (
  <Container>
    <Button item="ALL" />
    <Button item="WEEK" />
    <Button item="YEAR" />
    <Button item="LIFE TIME" />
  </Container>
);

export default Sidebar;
