import React, { useState } from 'react';
import Greeting from './components/Greeting';
const Start = () => {
  const [count, setCount] = useState(0);
  const plusOne = () => setCount((prev) => prev + 1);
  const minusOne = () =>
    setCount((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return prev + 0;
      }
    });
  const name = 'React';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 36,
    fontWeight: 'bold',
    padding: 16,
  };
  return (
    <div>
      <div style={style}>REACT</div>
      <div>
        <h3>
          {name}
          {count}
        </h3>
      </div>
      <button onClick={plusOne}>버튼1</button>
      <button onClick={minusOne}>버튼2</button>
      <Greeting />
      {count > 10 ? <h2>너무 많아요</h2> : <h2>안전합니다.</h2>}
      {count > 20 && <h2>과부하 상태입니다</h2>}
      <div style={style}>이렇게 같은 스타일 적용 가능</div>
      <input type="text" placeholder="안녕하세요?" maxLength={10} />
    </div>
  );
};

export default Start;
