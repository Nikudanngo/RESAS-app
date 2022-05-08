import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Fetch from "./component/Fetch";
import styled from "styled-components";

// 即席レスポンス
const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 1228px;
  margin: 0 auto;
  background-color: #f8f8f8;
  @media (max-width: 1227px) {
    max-width: 645px;
  }
  @media (max-width: 644px) {
    max-width: 432px;
  }
  @media (max-width: 431px) {
    max-width: 361px;
  }
  @media (max-width: 360px) {
    max-width: 291px;
  }
`;

// center the header
const Headers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f8f8f8;
  border-bottom: 2px solid #e0e0e0;
  padding: 0 20px;
  font-size: 20px;
`;
// background
const Background = styled.div`
  background-color: #e5e5e5;
`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Background>
      <Main>
        <Headers>全国の人口増加率</Headers>
        <Fetch />
      </Main>
    </Background>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
