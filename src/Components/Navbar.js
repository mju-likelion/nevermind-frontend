// 로그인 된 후의 상황인 Navbar
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import notice from "assets/notice.svg";
import home from "assets/home.svg";
import service from "assets/service.svg";
import user from "assets/user.svg";
import logout from "assets/logout.png"; // 임시 로그아웃 이미지
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import nevAxios from "Src/nev-axios";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #263d66;
  width: 5em;
  height: 100%;
  position: fixed;
  overflow: auto;
`;

const ImgLinkContainer = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const ImgLink = ({ to, imgSrc }) => (
  <Link to={to} className="d-flex h-100">
    <button type="button" className="btn">
      <img src={imgSrc} />
    </button>
  </Link>
);

const Navbar = () => {
  const [isSession, setSessionState] = useState(false);
  useEffect(() => {
    (async () => {
      const sessionRes = await nevAxios.issession();
      setSessionState(sessionRes.data.is_session);
    })();
  });

  // 임시 로그아웃 버튼 삽입
  return (
    <Container className="py-5">
      {isSession ? (
        <ImgLinkContainer>
          <ImgLink to="Main" imgSrc={home} />
          <ImgLink to="Main" imgSrc={user} />
          <ImgLink to="Main" imgSrc={notice} />
          <ImgLink to="Service" imgSrc={service} />
          <Link
            to="Main"
            className="d-flex h-100"
            onClick={(e) => nevAxios.logout()}
          >
            <button type="button" className="btn">
              <img src={logout} />
            </button>
          </Link>
        </ImgLinkContainer>
      ) : (
        <div></div>
      )}
    </Container>
  );
};

export default withRouter(Navbar);
