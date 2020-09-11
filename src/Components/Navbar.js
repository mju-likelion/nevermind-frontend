// 로그인 된 후의 상황인 Navbar
import React from "react";
import styled from "styled-components";
import notice from "assets/notice.svg";
import home from "assets/home.svg";
import service from "assets/service.svg";
import user from "assets/user.svg";
import logout from "assets/logout.png"; // 임시 로그아웃 이미지
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
      <img src={imgSrc} alt={imgSrc.split("/").pop()} />
    </button>
  </Link>
);

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSession: false };
  }

  setSessionState() {
    (async () => {
      const sessionRes = await nevAxios.issession();
      this.setState({ isSession: sessionRes.data.is_session });
    })();
  }

  componentDidMount() {
    this.setSessionState();
  }

  componentDidUpdate() {
    //this.setSessionState();
  }

  render() {
    return (
      <Container className="py-5">
        {this.state.isSession ? (
          <ImgLinkContainer>
            <ImgLink to="Main" imgSrc={home} />
            <ImgLink to="Main" imgSrc={user} />
            <ImgLink to="Main" imgSrc={notice} />
            <ImgLink to="Service" imgSrc={service} />
            <Link
              to="Main"
              className="d-flex h-100"
              onClick={(e) => {
                (async () => {
                  await nevAxios.logout();
                  this.forceUpdate();
                })();
              }}
            >
              <button type="button" className="btn">
                <img src={logout} alt="logout.png" />
              </button>
            </Link>
          </ImgLinkContainer>
        ) : (
          <div></div>
        )}
      </Container>
    );
  }
}

export default Navbar;
