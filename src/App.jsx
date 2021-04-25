/* eslint react-hooks/exhaustive-deps : off */
import React, { useEffect, useState } from "react";
import ColofulMessage from "./components/ColofulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const omClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColofulMessage color="blue">test</ColofulMessage>
      <ColofulMessage color="pink">okokokokok</ColofulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={omClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

export default App;
