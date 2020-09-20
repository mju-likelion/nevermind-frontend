import React from "react";
import AddPresenter from "./AddPresenter";
import axios from "axios";

const api = axios.create({
  baseURL: "https://rss.itunes.apple.com/api/v1/kr/ios-apps/",
});

const applist = [
  {
    artistName: "(주)씨엔티테크",
    id: "1508964189",
    releaseDate: "2020-09-08",
    name: "반올림피자샵",
    kind: "iosSoftware",
    copyright: "© (c)2020BANOLIMFOOD ALL RIGHTS RESERVED",
    artistId: "416791260",
    artistUrl:
      "https://apps.apple.com/kr/developer/%EC%A3%BC-%EC%94%A8%EC%97%94%ED%8B%B0%ED%85%8C%ED%81%AC/id416791260",
    artworkUrl100:
      "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/11/56/71/115671c0-e0e5-0a53-4b2e-a3aa78e02fa4/AppIcon-0-0-1x_U007emarketing-0-0-0-5-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/200x200bb.png",
    genres: [
      {
        genreId: "6023",
        name: "음식 및 음료",
        url: "https://itunes.apple.com/kr/genre/id6023",
      },
      {
        genreId: "6012",
        name: "라이프 스타일",
        url: "https://itunes.apple.com/kr/genre/id6012",
      },
    ],
    url:
      "https://apps.apple.com/kr/app/%EB%B0%98%EC%98%AC%EB%A6%BC%ED%94%BC%EC%9E%90%EC%83%B5/id1508964189",
  },
  {
    artistName: "Hyoungbin Kook",
    id: "1530149106",
    releaseDate: "2020-09-16",
    name: "Photo Widget : 홈 화면 앨범",
    kind: "iosSoftware",
    copyright: "© 2020 hyoungbin kook",
    artistId: "1358650986",
    artistUrl:
      "https://apps.apple.com/kr/developer/hyoungbin-kook/id1358650986",
    artworkUrl100:
      "https://is3-ssl.mzstatic.com/image/thumb/Purple114/v4/ad/49/63/ad496399-75ce-bc45-bb48-cf2d9adcb6a2/AppIcon-1x_U007emarketing-0-7-0-85-220.png/200x200bb.png",
    genres: [
      {
        genreId: "6007",
        name: "생산성",
        url: "https://itunes.apple.com/kr/genre/id6007",
      },
      {
        genreId: "6002",
        name: "유틸리티",
        url: "https://itunes.apple.com/kr/genre/id6002",
      },
    ],
    url:
      "https://apps.apple.com/kr/app/photo-widget-%ED%99%88-%ED%99%94%EB%A9%B4-%EC%95%A8%EB%B2%94/id1530149106",
  },
  {
    artistName: "InnerSloth LLC",
    id: "1351168404",
    releaseDate: "2018-07-25",
    name: "Among Us!",
    kind: "iosSoftware",
    copyright: "© Innersloth LLC",
    artistId: "957995279",
    artistUrl: "https://apps.apple.com/kr/developer/innersloth-llc/id957995279",
    artworkUrl100:
      "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/d5/14/a7/d514a7fb-69e6-7519-e753-2527d12939f1/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/200x200bb.png",
    genres: [
      {
        genreId: "6014",
        name: "게임",
        url: "https://itunes.apple.com/kr/genre/id6014",
      },
      {
        genreId: "7001",
        name: "액션",
        url: "https://itunes.apple.com/kr/genre/id7001",
      },
      {
        genreId: "7015",
        name: "시뮬레이션",
        url: "https://itunes.apple.com/kr/genre/id7015",
      },
    ],
    url: "https://apps.apple.com/kr/app/among-us/id1351168404",
  },
];

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      appName: null,
      list: null,
      fee: 0,
      type: "all",
      startDate: new Date(),
      endDate: new Date(),
    };
  }

  async componentDidMount() {
    try {
      /*
      const {
        results: { results: list },
      } = await api.get("top-free/all/100/explicit.json");
      */
      console.log(applist);
      //this.setState(results);
    } catch {}
  }

  handleStartDateChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleEndDateChange = (date) => {
    this.setState({
      endDate: date,
    });
  };

  handleSubmit = (appName, fee, type) => {
    this.setState({
      appName: appName,
      fee: fee,
      type: type,
    });
  };

  render() {
    console.log(this.state);
    const { startDate, endDate } = this.state;
    return (
      <AddPresenter
        startDate={startDate}
        endDate={endDate}
        handleStartDateChange={this.handleStartDateChange}
        handleEndDateChange={this.handleEndDateChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
