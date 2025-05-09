import React, { useEffect, useState } from "react";

const HookStructure = () => {
  const [count, setCount] = useState(0);
  const [text, SetText] = useState("빈 텍스트");

  useEffect(() => {
    console.log("컴포넌트가 마운트됨");
  }, []);

  useEffect(() => {
    console.log("카운트가 변경되었음:", count);
  }, [count]);

  useEffect(() => {
    console.log("텍스트가 변경되었음:", text);
  }, [text]);

  useEffect(() => {
    console.log("매 랜더링마다 실행");
  });
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <hr />
      <h2>typed text:{text}</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => SetText(e.target.value)}
      ></input>
    </div>
  );
};

export default HookStructure;
