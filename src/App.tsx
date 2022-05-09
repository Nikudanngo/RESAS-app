import React from "react";
import GlobalStyles from "./style/GlobalStyles";
import { LightTheme, DarkTheme } from "./style/Theme";
import Fetch from "./component/Fetch";
import styled from "styled-components";
import { ReactComponent as LightIcon } from "./icons/light.svg";
import { ReactComponent as DarkIcon } from "./icons/dark.svg";

// 左寄せ
const Headers = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 1rem;
`;
// 右寄せにする
const ToggleButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  margin-right: 1rem;
  background-color: transparent;
  border: none;
`;

const LightIconStyled = styled(LightIcon)`
  fill: #f8f8f8;
  &:hover {
    cursor: pointer;
  }
`;

const DarkIconStyled = styled(DarkIcon)`
  fill: #232323;
  &:hover {
    cursor: pointer;
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleChange = () => {
    // on of 切り替え
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div>
      <GlobalStyles theme={isDarkMode ? DarkTheme.theme : LightTheme.theme} />
      <Headers>
        全国の人口推移グラフ
        <ToggleButton onClick={() => handleChange()}>
          {/* <LightIconStyled /> */}
          {isDarkMode ? <LightIconStyled /> : <DarkIconStyled />}
        </ToggleButton>
      </Headers>
      <Fetch />
    </div>
  );
}

export default App;
