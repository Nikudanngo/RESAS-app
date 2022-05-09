import React from "react";
import GlobalStyles from "./style/GlobalStyles";
import { LightTheme, DarkTheme } from "./style/Theme";
import Header from "./component/Header";
import Fetch from "./component/Fetch";
function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  return (
    <div>
      <GlobalStyles theme={isDarkMode ? DarkTheme.theme : LightTheme.theme} />
      <Header />
      <Fetch />
    </div>
  );
}

export default App;
