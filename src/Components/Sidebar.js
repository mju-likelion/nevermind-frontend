import React, { useEffect } from "react";
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
  <button type="button" className="nav-btn btn p-4 w-100">
    {item}
  </button>
);

const Sidebar = () => {
  useEffect(() => {
    $(".nav-btn").click(function (e) {
      const cssActive = { "background-color": "#ebebeb" };
      const cssNone = { "background-color": "inherit" };
      $(".nav-active").css(cssNone).removeClass("nav-active");
      $(this).toggleClass("nav-active");
      $(this).css($(this).hasClass("nav-active") ? cssActive : cssNone);
    });
    $(".nav-btn:first-child").click();
  }, []);
  return (
    <Container>
      <Button item="ALL" />
      <Button item="WEEK" />
      <Button item="YEAR" />
      <Button item="LIFE TIME" />
    </Container>
  );
};

export default Sidebar;
