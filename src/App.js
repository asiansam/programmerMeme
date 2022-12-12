import React, { useState, useEffect } from "react";
import axios from "axios";
import Router from "./shared/Router";

const App = () => {
  const [contents, setContents] = useState(null);

  //axios를 통해서 get 요청을 하는 함수를 생성합니다.
  // 비동기처리를 해야하므로 async/await 구문을 통해서 처리합니다.
  const fetchContents = async () => {
    const { data } = await axios.get("http://localhost:3001/memes");
    setContents(data); // 서버로부터 fetching한 데이터를 useState의 state로 set 합니다.
  };

  // 생성한 함수를 컴포넌트가 mount 됐을 떄 실행하기 위해 useEffect를 사용합니다.
  useEffect(() => {
    // effect 구문에 생성한 함수를 넣어 실행합니다.
    fetchContents();
  }, []);

  // data fetching이 정상적으로 되었는지 콘솔을 통해 확인합니다.
  console.log(contents);

  // 최상위 component이 App에서 Router연결
  return <Router />;
};

export default App;
