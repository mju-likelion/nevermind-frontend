import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const RestIcon = styled.img.attrs({
  src: "./logo.png",
})`
  width: 220px;
  height: 195px;
  display: block;
  margin: 0px auto;
  margin-top: 170px;
`;

const Desc = styled.p`
  font-family: "GmarketSansBold";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  font-size: 35px;
  margin-top: 50px;
  text-align: center;
`;

const Logo = () => (
  <>
    <RestIcon></RestIcon>
    <Desc>
      매달 신경쓰였던 '구독정보' <br />
      이제 Never Mind가 대신 알려드릴게요
    </Desc>
  </>
);
export default Logo;
