import React from "react";
import Router from "./shared/Router";
import { __getContents } from "./redux/modules/detailMod";

const App = () => {
  // 최상위 component이 App에서 Router연결
  return <Router />;
};

export default App;
